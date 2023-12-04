import Replicate from 'replicate';
import { NextRequest, NextResponse } from 'next/server';
import { getUserIp } from '@/lib/user-data';
import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit';
import { checkSubscription, checkSubscriptionLimit } from '@/lib/subscription';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY ?? '',
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    const userIp = getUserIp(req);

    const isSubscribed = await checkSubscription();

    if (!isSubscribed) {
      const limitReached = await checkApiLimit(userIp);

      if (limitReached) {
        return new NextResponse(
          'Free limit reached. You need to upgrade your account.',
          {
            status: 429,
          },
        );
      }
    } else {
      const { requestAvailable, resetTime } = await checkSubscriptionLimit();

      if (!requestAvailable && resetTime) {
        const resetTimeHour = new Date(resetTime).getHours();

        return new NextResponse(
          `Subscription limit reached. Wait until ${resetTimeHour} and try again.`,
          {
            status: 429,
          },
        );
      }

      if (!requestAvailable && !resetTime) {
        return new NextResponse(
          'There has been an issue with your request, please try logging again',
          {
            status: 500,
          },
        );
      }
    }

    const response = await replicate.run(
      'anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f',
      {
        input: {
          prompt,
        },
      },
    );

    if (!isSubscribed) {
      await incrementApiLimit(userIp);
    }

    return NextResponse.json(response);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
