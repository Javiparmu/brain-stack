import { UserApiLimit } from './UserApiLimit';
import { UserId } from './value-object/UserId';

export interface UserApiLimitRepository {
  save(userApiLimit: UserApiLimit): Promise<void>;
  search(id: UserId): Promise<UserApiLimit | null>;
}
