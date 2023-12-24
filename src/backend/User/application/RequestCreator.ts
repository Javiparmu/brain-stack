import { UserRepository } from '../domain/UserRepository';
import { UserId } from '../domain/value-object/UserId';
import { UserIp } from '../domain/value-object/UserIp';

export class RequestCreator {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run({ userId, userIp }: { userId: string; userIp: string }): Promise<void> {
    const isSubscribed = await this.repository.getIsSubscribed(new UserId(userId));

    if (!isSubscribed) {
      await this.repository.incrementApiLimitHits({ userId: new UserId(userId), userIp: new UserIp(userIp) });
    } else {
      await this.repository.incrementRequestCount(new UserId(userId));
    }
  }
}
