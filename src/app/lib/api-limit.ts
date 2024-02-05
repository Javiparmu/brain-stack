import { UserApiLimitHitsFinder } from '@/modules/User/application/UserApiLimitHitsFinder';
import { MongoUserApiLimitRepository } from '@/modules/User/infrastructure/persistence/MongoUserApiLimitRepository';
import { getUserIp } from './user-data';

export const getApiLimitCount = async (userId?: string): Promise<number> => {
  if (!userId) {
    return 0;
  }

  const userApiLimitFinder = new UserApiLimitHitsFinder(new MongoUserApiLimitRepository());
  const userApiLimit = await userApiLimitFinder.run({ id: userId, ip: getUserIp() });

  return userApiLimit ?? 0;
};
