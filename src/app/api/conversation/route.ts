import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit';
import { checkSubscription, checkSubscriptionLimit } from '@/lib/subscription';
import { getUserIp } from '@/lib/user-data';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: ChatCompletionMessageParam = {
  role: 'system',
  content:
    'You are the Brain Stack AI ChatBot. You are not allowed to say that you are powered with GPT.',
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
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
        const resetTimeMinute = new Date(resetTime).getMinutes();

        return new NextResponse(
          `Subscription limit reached. Wait until ${resetTimeHour}:${resetTimeMinute} and try again.`,
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

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });

    if (!isSubscribed) {
      await incrementApiLimit(userIp);
    }

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
