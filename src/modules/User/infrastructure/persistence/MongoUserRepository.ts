import { MongoRepository } from '@/modules/Shared/infrastructure/persistence/MongoRepository';
import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';
import UserModel from '@/modules/User/infrastructure/persistence/mongoose/User';
import { UserId } from '../../domain/value-object/UserId';
import { UserEmail } from '../../domain/value-object/UserEmail';
import { UserDocument } from './mongoose/documents';
import { UserIp } from '../../domain/value-object/UserIp';
import { HOUR_IN_MS } from '../../Shared/constants';
import { UserRequestCount } from '../../domain/value-object/UserRequestCount';
import { UserRequestReset } from '../../domain/value-object/UserRequestReset';
import { InternalServerErrorException } from '@/modules/Shared/domain/exception/InternalServerErrorException';
import { SubscriptionLimitException } from '@/modules/Shared/domain/exception/SubscriptionLimitException';
import { UserNotFoundException } from '@/modules/Shared/domain/exception/UserNotFoundException';
import { MongoUserSubscriptionRepository } from './MongoUserSubscriptionRepository';
import { MongoUserApiLimitRepository } from './MongoUserApiLimitRepository';
import { UserSubscription } from '../../domain/UserSubscription';
import { MongooseConnection } from '@/modules/Shared/infrastructure/persistence/MongooseConnection';
import { SubscriptionId } from '@/modules/Subscription/domain/value-object/SubscriptionId';

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  private readonly userSubscriptionRepository = new MongoUserSubscriptionRepository();
  private readonly userApiLimitRepository = new MongoUserApiLimitRepository();

  constructor() {
    super(UserModel);
  }

  public async save(user: User): Promise<void> {
    await this.persist(user.id, user);
  }

  public async search(id: UserId): Promise<User | null> {
    await MongooseConnection.connect({ url: process.env.MONGODB_URI ?? '' });

    const user = await UserModel.findById(id).lean<UserDocument>();

    return user ? User.fromPrimitives({ ...user, id: user._id }) : null;
  }

  public async searchByEmail(email: UserEmail): Promise<User | null> {
    await MongooseConnection.connect({ url: process.env.MONGODB_URI ?? '' });

    const user = await UserModel.findOne({ email }).lean<UserDocument>();

    return user ? User.fromPrimitives({ ...user, id: user._id }) : null;
  }

  public async subscribe(subscription: UserSubscription): Promise<void> {
    await MongooseConnection.connect({ url: process.env.MONGODB_URI ?? '' });

    await this.userSubscriptionRepository.save(subscription);

    const user = new User({
      id: subscription.userId!,
      plan: new SubscriptionId(subscription.id.value),
    });

    await this.save(user);
  }

  public async incrementRequestCount(id: UserId): Promise<void> {
    await MongooseConnection.connect({ url: process.env.MONGODB_URI ?? '' });

    const user = await UserModel.findById(id);

    if (!user) throw new UserNotFoundException();

    const userSubscription = await this.userSubscriptionRepository.searchValid(id);

    if (!userSubscription) throw new InternalServerErrorException('User is not subscribed');

    if (!userSubscription.requestReset || userSubscription.requestReset.value < Date.now()) {
      return this.userSubscriptionRepository.save(
        new UserSubscription({
          ...userSubscription,
          requestCount: new UserRequestCount(1),
          requestReset: new UserRequestReset(Date.now() + HOUR_IN_MS),
        }),
      );
    }

    if (userSubscription.requestCount!.value >= userSubscription.requestLimit!.value) {
      throw new SubscriptionLimitException(new Date(userSubscription.requestReset.value).getHours());
    }

    await this.userSubscriptionRepository.save(
      new UserSubscription({
        ...userSubscription,
        requestCount: new UserRequestCount(userSubscription.requestCount!.value + 1),
      }),
    );
  }

  public async getIsSubscribed(id: UserId): Promise<boolean> {
    const userSubscription = await this.userSubscriptionRepository.searchValid(id);

    return !!userSubscription;
  }

  public async getApiLimitHits({ userId, userIp }: { userId?: UserId; userIp?: UserIp }): Promise<number> {
    return this.userApiLimitRepository.getHits({ userId, userIp });
  }

  public async getApiLimitExceeded(matching: { userId?: UserId; userIp?: UserIp }): Promise<boolean> {
    return this.userApiLimitRepository.getIsExceeded(matching);
  }

  public async incrementApiLimitHits({ userId, userIp }: { userId: UserId; userIp: UserIp }): Promise<void> {
    return this.userApiLimitRepository.incrementHits({ userId, userIp });
  }
}
