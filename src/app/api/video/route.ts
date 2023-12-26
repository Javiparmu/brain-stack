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

    const userIp = getUserIp(req);

    const requestCreator = new RequestCreator(new MongoUserRepository());
    await requestCreator.run({ userId, userIp });

    const response = await replicate.run(
      'anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f',
      {
        input: {
          prompt,
        },
      },
    );

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof CustomException) {
      return new NextResponse(error.message, { status: error.status });
    } else {
      return new NextResponse('Internal Error', { status: 500 });
    }
  }
}
