import { UserFinder } from '@/modules/User/application/UserFinder';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';

export const checkNewUser = async (email: string) => {
  const userFinder = new UserFinder(new MongoUserRepository());
  return !(await userFinder.run(email));
};
