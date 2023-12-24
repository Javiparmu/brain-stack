import { UserApiLimitFinder } from '@/backend/User/application/UserApiLimitFinder';
import { MongoUserApiLimitRepository } from '@/backend/User/infrastructure/persistence/MongoUserApiLimitRepository';

export const getApiLimitCount = async (userId?: string): Promise<number> => {
  if (!userId) {
    return 0;
  }

  const userApiLimitFinder = new UserApiLimitFinder(new MongoUserApiLimitRepository());
  const userApiLimit = await userApiLimitFinder.run(userId);

  return userApiLimit?.hits.value ?? 0;
};
