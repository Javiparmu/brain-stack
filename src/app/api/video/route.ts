import Replicate from 'replicate';
import { NextRequest, NextResponse } from 'next/server';
import { getUserIp } from '@/lib/user-data';
import { incrementApiLimit } from '@/lib/api-limit';

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

    const response = await replicate.run(
      'anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f',
      {
        input: {
          prompt,
        },
      },
    );

    const userIp = getUserIp(req);

    await incrementApiLimit(userIp);

    return NextResponse.json(response);
  } catch (error) {
    console.log('[VIDEO_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
