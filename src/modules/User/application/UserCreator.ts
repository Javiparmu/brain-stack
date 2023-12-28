import { UserRepository } from '../domain/UserRepository';
import { UserId } from '../domain/value-object/UserId';
import { UserEmail } from '../domain/value-object/UserEmail';
import { UserPassword } from '../domain/value-object/UserPassword';
import { User } from '../domain/User';
import { AuthProvider, UserAuthProvider } from '../domain/value-object/UserAuthProvider';
import { InvalidRequestException } from '@/modules/Shared/domain/exception/InvalidRequestException';

export class UserCreator {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run({
    id,
    email,
    password,
    authProvider,
  }: {
    id: string;
    email: string;
    password?: string;
    authProvider: AuthProvider;
  }): Promise<void> {
    if (authProvider === 'credentials' && !password) {
      throw new InvalidRequestException('Password is required');
    }

    const user = new User({
      id: new UserId(id),
      email: new UserEmail(email),
      password: password ? new UserPassword(password) : undefined,
      authProvider: new UserAuthProvider(authProvider),
    });

    await this.repository.save(user);
  }
}
