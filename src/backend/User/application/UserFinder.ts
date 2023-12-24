import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';
import { UserEmail } from '../domain/value-object/UserEmail';

export class UserFinder {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(email: string): Promise<User | null> {
    return this.repository.searchByEmail(new UserEmail(email));
  }
}
