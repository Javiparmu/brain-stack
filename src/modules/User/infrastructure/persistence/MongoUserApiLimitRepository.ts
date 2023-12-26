import { MongoRepository } from '@/modules/Shared/infrastructure/persistence/MongoRepository';
import { UserApiLimitRepository } from '../../domain/UserApiLimitRepository';
import { UserApiLimit } from '../../domain/UserApiLimit';
import { UserId } from '../../domain/value-object/UserId';
import UserApiLimitModel from './mongoose/UserApiLimit';
import { UserApiLimitDocument } from './mongoose/documents';
import { UserIp } from '../../domain/value-object/UserIp';
import { InternalServerErrorException } from '@/modules/Shared/domain/exception/InternalServerErrorException';
import { InvalidRequestException } from '@/modules/Shared/domain/exception/InvalidRequestException';
import { MAX_FREE_COUNTS } from '../../Shared/constants';
import { FreeLimitException } from '@/modules/Shared/domain/exception/FreeLimitException';
import { randomUUID } from 'crypto';
import { UserApiLimitId } from '../../domain/UserApiLimtId';
import { UserApiHits } from '../../domain/value-object/UserApiHits';

export class MongoUserApiLimitRepository extends MongoRepository<UserApiLimit> implements UserApiLimitRepository {
  constructor() {
    super(UserApiLimitModel);
  }

  public async save(userApiLimitRepository: UserApiLimit): Promise<void> {
    await this.persist(userApiLimitRepository.id, userApiLimitRepository);
  }

  public async search(userId: UserId): Promise<UserApiLimit | null> {
    const userApiLimit = await UserApiLimitModel.findOne({ userId }).lean<UserApiLimitDocument>();

    return userApiLimit ? UserApiLimit.fromPrimitives({ ...userApiLimit, id: userApiLimit._id }) : null;
  }

  public async searchByUserIp(userIp: UserIp): Promise<UserApiLimit | null> {
    const userApiLimit = await UserApiLimitModel.findOne({ userIp }).lean<UserApiLimitDocument>();

    return userApiLimit ? UserApiLimit.fromPrimitives({ ...userApiLimit, id: userApiLimit._id }) : null;
  }

  public async getHits({ userId, userIp }: { userId?: UserId; userIp?: UserIp }): Promise<number> {
    if (!userId && !userIp) throw new InvalidRequestException('No matching criteria provided for user api limit');

    let userApiLimit = null;

    if (userId) {
      userApiLimit = await this.search(userId);
    }

    if (!userApiLimit && userIp) {
      userApiLimit = await this.searchByUserIp(userIp);
    }

    if (!userApiLimit) throw new InternalServerErrorException('No user api limit');

    return userApiLimit.hits.value ?? 0;
  }

  public async getIsExceeded(matching: { userId?: UserId; userIp?: UserIp; hits?: number }): Promise<boolean> {
    const userApiLimitHits = matching.hits ?? (await this.getHits(matching));

    return userApiLimitHits >= MAX_FREE_COUNTS;
  }

  public async incrementHits({ userId, userIp }: { userId: UserId; userIp: UserIp }): Promise<void> {
    if (!userId && !userIp) throw new InvalidRequestException('No matching criteria provided for user api limit');

    const userApiLimit = (await this.search(userId)) ?? (await this.searchByUserIp(userIp!));

    if (!userApiLimit) {
      await this.save(
        new UserApiLimit({
          id: new UserApiLimitId(randomUUID()),
          userId,
          userIp,
          hits: new UserApiHits(1),
          exceeded: false,
        }),
      );
    } else {
      const limitExceeded = await this.getIsExceeded({ hits: userApiLimit?.hits.value ?? 0 });

      if (limitExceeded) throw new FreeLimitException();

      await this.save(new UserApiLimit({ ...userApiLimit, hits: new UserApiHits(userApiLimit.hits.value + 1) }));
    }
  }
}
