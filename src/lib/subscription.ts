import dbConnect from '@/db/mongoose';
import User from '@/models/User';
import UserSubscription from '@/models/UserSubscription';
import { getServerSession } from 'next-auth';

const DAY_IN_MS = 86400000;

export const checkSubscription = async (): Promise<boolean> => {
  const session = await getServerSession();

  if (!session?.user) {
    return false;
  }

  await dbConnect();

  const user = await User.findOne({
    email: session.user.email,
  });

  if (!user) {
    return false;
  }

  const userSubscription = await UserSubscription.findOne({
    userId: user._id,
  });

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd &&
    userSubscription.stripeCurrentPeriodEnd + DAY_IN_MS > Date.now();

  return !!isValid;
};
