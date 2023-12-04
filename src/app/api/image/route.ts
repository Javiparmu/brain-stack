import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit';
import { checkSubscription, checkSubscriptionLimit } from '@/lib/subscription';
import { getUserIp } from '@/lib/user-data';
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { prompt, amount = 1, resolution = '256x256' } = body;

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    if (!amount) {
      return new NextResponse('Amount is required', { status: 400 });
    }

    if (!resolution) {
      return new NextResponse('Resolution is required', { status: 400 });
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

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (!isSubscribed) {
      await incrementApiLimit(userIp);
    }

    return NextResponse.json(response.data);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
