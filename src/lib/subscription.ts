import dbConnect from '@/db/mongoose';
import User from '@/models/User';
import UserSubscription from '@/models/UserSubscription';
import { getPlanFromId } from '@/utils';
import { PlanEnum } from '@/utils/enums';
import { getServerSession } from 'next-auth';

interface Subscription {
  plan: PlanEnum;
  userId: string;
}

const MONTH_IN_MS = 30 * 86400000;
const HOUR_IN_MS = 3600000;

export const checkSubscription = async (): Promise<Subscription | null> => {
  const session = await getServerSession();

  if (!session?.user) {
    return null;
  }

  await dbConnect();

  const user = await User.findOne({
    email: session.user.email,
  });

  if (!user) {
    return null;
  }

  const userSubscription = await UserSubscription.findOne({
    userId: user._id,
    stripeCurrentPeriodEnd: { $gt: Date.now() - MONTH_IN_MS },
  });

  if (!userSubscription) {
    return null;
  }

  return {
    plan: userSubscription.stripePriceId,
    userId: userSubscription.userId,
  };
};

export const checkSubscriptionLimit = async (): Promise<{
  requestAvailable: boolean;
  resetTime: number | null;
}> => {
  const session = await getServerSession();

  if (!session?.user) {
    return {
      requestAvailable: false,
      resetTime: null,
    };
  }

  await dbConnect();

  const user = await User.findOne({
    email: session.user.email,
  });

  if (!user) {
    return {
      requestAvailable: false,
      resetTime: null,
    };
  }

  const { requestLimit, requestCount, requestReset } = user;

  if (!requestLimit) {
    return {
      requestAvailable: false,
      resetTime: null,
    };
  }

  if (!requestReset || requestReset < Date.now()) {
    user.requestCount = 1;
    user.requestReset = Date.now() + HOUR_IN_MS;

    await user.save();

    return {
      requestAvailable: true,
      resetTime: user.requestReset,
    };
  }

  if (requestCount >= requestLimit) {
    return {
      requestAvailable: false,
      resetTime: requestReset,
    };
  }

  user.requestCount += 1;

  await user.save();

  return {
    requestAvailable: true,
    resetTime: requestReset,
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
