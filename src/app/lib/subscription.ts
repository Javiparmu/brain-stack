import { ValidUserSubscriptionFinder } from '@/modules/User/application/ValidUserSubscriptionFinder';
import { MongoUserSubscriptionRepository } from '@/modules/User/infrastructure/persistence/MongoUserSubscriptionRepository';
import { getPlanFromId } from '@/app/utils';
import { PlanEnum } from '@/app/utils/enums';

interface Subscription {
  plan: string;
  userId: string;
}

export const checkSubscription = async (userId?: string): Promise<Subscription | null> => {
  if (!userId) {
    return null;
  }

  const userSubscriptionFinder = new ValidUserSubscriptionFinder(new MongoUserSubscriptionRepository());
  const userSubscription = await userSubscriptionFinder.run(userId);

  if (!userSubscription) {
    return null;
  }

  return {
    plan: userSubscription.stripePriceId.value,
    userId: userSubscription.userId.value,
  };
};

export const getRequestLimitFromPlan = (planId: string): number => {
  const plan = getPlanFromId(planId);

  switch (plan) {
    case PlanEnum.BASIC:
      return 5;
    case PlanEnum.STANDARD:
      return 10;
    case PlanEnum.PREMIUM:
      return 20;
    default:
      return 0;
  }
};
