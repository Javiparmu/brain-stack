import { UserApiLimitRepository } from '../domain/UserApiLimitRepository';
import { UserId } from '../domain/value-object/UserId';
import { UserIp } from '../domain/value-object/UserIp';

export class UserApiLimitHitsFinder {
  private repository: UserApiLimitRepository;

  constructor(repository: UserApiLimitRepository) {
    this.repository = repository;
  }

  async run({ id, ip }: { id: string; ip: string }): Promise<number> {
    return this.repository.getHits({ userId: new UserId(id), userIp: new UserIp(ip) });
  }
}
