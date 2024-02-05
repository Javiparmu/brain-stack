import { UserApiLimit } from './UserApiLimit';
import { UserId } from './value-object/UserId';
import { UserIp } from './value-object/UserIp';

export interface UserApiLimitRepository {
  save(userApiLimit: UserApiLimit): Promise<void>;
  search(id: UserId): Promise<UserApiLimit | null>;
  getHits({ userId, userIp }: { userId?: UserId; userIp?: UserIp }): Promise<number>;
}
