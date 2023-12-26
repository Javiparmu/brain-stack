import { User } from './User';
import { UserSubscription } from './UserSubscription';
import { UserEmail } from './value-object/UserEmail';
import { UserId } from './value-object/UserId';
import { UserIp } from './value-object/UserIp';

export interface UserRepository {
  save(user: User): Promise<void>;
  search(id: UserId): Promise<User | null>;
  searchByEmail(email: UserEmail): Promise<User | null>;
  subscribe(subscription: UserSubscription): Promise<void>;
  incrementRequestCount(id: UserId): Promise<void>;
  getIsSubscribed(id: UserId): Promise<boolean>;
  getApiLimitHits({ userId, userIp }: { userId?: UserId; userIp?: UserIp }): Promise<number>;
  getApiLimitExceeded(matching: { userId?: UserId; userIp?: UserIp }): Promise<boolean>;
  incrementApiLimitHits({ userId, userIp }: { userId: UserId; userIp: UserIp }): Promise<void>;
}
