import dbConnect from '@/db/mongoose';
import User from '@/models/User';
import UserApiLimit from '@/models/UserApiLimit';
import { maxFreeCounts } from '@/utils';
import { getServerSession } from 'next-auth';

export const incrementApiLimit = async (ip?: string): Promise<void> => {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return;
    }

    await dbConnect();

    const user = await User.findOne({
      email: session.user.email,
    });

    if (!user) {
      return;
    }

    const userApiLimit = await UserApiLimit.findOne({
      userId: user._id,
    });

    if (userApiLimit && !userApiLimit.excended) {
      await UserApiLimit.updateOne(
        {
          userId: user._id,
        },
        {
          hits: userApiLimit.hits + 1,
          exceded: userApiLimit.hits === maxFreeCounts - 1,
        },
      );
    } else {
      const ipApiLimit = await UserApiLimit.findOne({
        ip,
      });

      if (ipApiLimit && !ipApiLimit.excended) {
        await UserApiLimit.updateOne(
          {
            ip,
          },
          {
            hits: ipApiLimit.hits + 1,
            exceded: ipApiLimit.hits === maxFreeCounts - 1,
          },
        );
      } else {
        await UserApiLimit.create({
          ip,
          userId: user._id,
          hits: 1,
          exceded: false,
        });
      }
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const checkApiLimit = async (ip?: string): Promise<boolean> => {
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

  let userApiLimit = await UserApiLimit.findOne({
    userId: user._id,
  });

  if (!userApiLimit) {
    userApiLimit = await UserApiLimit.findOne({
      ip,
    });
  }

  if (userApiLimit && userApiLimit.hits >= maxFreeCounts) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async (): Promise<number> => {
  const session = await getServerSession();

  if (!session?.user) {
    return 0;
  }

  await dbConnect();

  const user = await User.findOne({
    email: session.user.email,
  });

  if (!user) {
    return 0;
  }

  const userApiLimit = await UserApiLimit.findOne({
    userId: user._id,
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.hits;
};
