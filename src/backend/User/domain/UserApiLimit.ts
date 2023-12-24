import { UserId } from './value-object/UserId';
import { AggregateRoot } from '@/backend/Shared/domain/AggregateRoot';
import { UserIp } from './value-object/UserIp';
import { UserApiHits } from './value-object/UserApiHits';
import { UserApiLimitId } from './UserApiLimtId';

export class UserApiLimit extends AggregateRoot {
  readonly id: UserApiLimitId;
  readonly userId: UserId;
  readonly userIp: UserIp;
  readonly hits: UserApiHits;
  readonly exceeded: boolean;

  constructor({
    id,
    userId,
    userIp,
    hits,
    exceeded,
  }: {
    id: UserApiLimitId;
    userId: UserId;
    userIp: UserIp;
    hits: UserApiHits;
    exceeded: boolean;
  }) {
    super();
    this.id = id;
    this.userId = userId;
    this.userIp = userIp;
    this.hits = hits;
    this.exceeded = exceeded;
  }

  static fromPrimitives({
    id,
    userId,
    userIp,
    hits,
    exceeded,
  }: {
    id: string;
    userId: string;
    userIp: string;
    hits: number;
    exceeded: boolean;
  }): UserApiLimit {
    return new UserApiLimit({
      id: new UserApiLimitId(id),
      userId: new UserId(userId),
      userIp: new UserIp(userIp),
      hits: new UserApiHits(hits),
      exceeded: exceeded,
    });
  }

  toPrimitives(): {
    id: string;
    userId: string;
    userIp: string;
    hits: number;
    exceeded: boolean;
  } {
    return {
      id: this.id.value,
      userId: this.userId.value,
      userIp: this.userIp.value,
      hits: this.hits.value,
      exceeded: this.exceeded,
    };
  }
}
