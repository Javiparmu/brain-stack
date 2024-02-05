import { CustomException } from '@/modules/Shared/domain/exception/CustomException';
import { RequestCreator } from '@/modules/User/application/RequestCreator';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';
import { getUserIp } from '@/app/lib/user-data';
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { prompt, amount = 1, resolution = '256x256', userId } = body;

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    if (!amount) {
      return new NextResponse('Amount is required', { status: 400 });
    }

    if (!resolution) {
      return new NextResponse('Resolution is required', { status: 400 });
    }

    const userIp = getUserIp();

    const requestCreator = new RequestCreator(new MongoUserRepository());
    await requestCreator.run({ userId, userIp });

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (error instanceof CustomException) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    } else {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
}
