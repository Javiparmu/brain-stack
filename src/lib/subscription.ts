import dbConnect from '@/db/mongoose';
import User from '@/models/User';
import UserSubscription from '@/models/UserSubscription';
import { PlanEnum } from '@/utils/enums';
import { getServerSession } from 'next-auth';

interface Subscription {
  plan: PlanEnum;
  userId: string;
}

const MONTH_IN_MS = 30 * 86400000;

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
