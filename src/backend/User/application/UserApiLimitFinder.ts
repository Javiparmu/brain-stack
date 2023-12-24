import { UserApiLimit } from '../domain/UserApiLimit';
import { UserApiLimitRepository } from '../domain/UserApiLimitRepository';
import { UserId } from '../domain/value-object/UserId';

export class UserApiLimitFinder {
  private repository: UserApiLimitRepository;

  constructor(repository: UserApiLimitRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<UserApiLimit | null> {
    return this.repository.search(new UserId(id));
  }
}
