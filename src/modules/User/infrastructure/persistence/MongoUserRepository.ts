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
import { UserPlan } from '../../domain/value-object/UserPlan';
import { getRequestLimitFromPlan } from '@/app/lib';
import { UserRequestLimit } from '../../domain/value-object/UserRequestLimit';
import { MongooseConnection } from '@/modules/Shared/infrastructure/persistence/MongooseConnection';

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
    await MongooseConnection.connect({ url: process.env.MONGO_URL ?? '' });

    const user = await UserModel.findById(id).lean<UserDocument>();

    return user ? User.fromPrimitives({ ...user, id: user._id }) : null;
  }

  public async searchByEmail(email: UserEmail): Promise<User | null> {
    await MongooseConnection.connect({ url: process.env.MONGO_URL ?? '' });

    const user = await UserModel.findOne({ email: email.value }).lean<UserDocument>();

    return user ? User.fromPrimitives({ ...user, id: user._id }) : null;
  }

  public async subscribe(subscription: UserSubscription): Promise<void> {
    await MongooseConnection.connect({ url: process.env.MONGO_URL ?? '' });

    await this.userSubscriptionRepository.save(subscription);

    const requestLimit = getRequestLimitFromPlan(subscription.stripePriceId.value);

    const user = new User({
      id: subscription.userId,
      plan: new UserPlan(subscription.stripePriceId.value),
      requestLimit: new UserRequestLimit(requestLimit),
      requestReset: new UserRequestReset(Date.now() + HOUR_IN_MS),
    });

    await this.save(user);
  }

  public async incrementRequestCount(id: UserId): Promise<void> {
    await MongooseConnection.connect({ url: process.env.MONGO_URL ?? '' });

    const user = await UserModel.findById(id);

    if (!user) throw new UserNotFoundException();

    if (!user.requestLimit) throw new InternalServerErrorException('User request limit not found');

    if (!user.requestReset || user.requestReset.value < Date.now()) {
      user.requestCount = new UserRequestCount(1);
      user.requestReset = new UserRequestReset(Date.now() + HOUR_IN_MS);

      await user.save();
    }

    if (user.requestCount >= user.requestLimit)
      throw new SubscriptionLimitException(new Date(user.resetTime).getHours());

    user.requestCount = new UserRequestCount(user.requestCount.value + 1);

    await user.save();
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
