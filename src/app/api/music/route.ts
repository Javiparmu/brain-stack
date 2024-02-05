import Replicate from 'replicate';
import { NextRequest, NextResponse } from 'next/server';
import { getUserIp } from '@/app/lib/user-data';
import { RequestCreator } from '@/modules/User/application/RequestCreator';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';
import { CustomException } from '@/modules/Shared/domain/exception/CustomException';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY ?? '',
});

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { prompt, userId } = body;

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    const userIp = getUserIp();

    const requestCreator = new RequestCreator(new MongoUserRepository());
    await requestCreator.run({ userId, userIp });

    const response = await replicate.run('riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05', {
      input: {
        prompt_a: prompt,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof CustomException) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    } else {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
}
