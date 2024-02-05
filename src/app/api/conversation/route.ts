import { CustomException } from '@/modules/Shared/domain/exception/CustomException';
import { RequestCreator } from '@/modules/User/application/RequestCreator';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';
import { getUserIp } from '@/app/lib/user-data';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
});

const instructionMessage: ChatCompletionMessageParam = {
  role: 'system',
  content: 'You are the Brain Stack AI ChatBot. You are not allowed to say that you are powered with GPT.',
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { messages, userId } = body;

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const userIp = getUserIp();

    const requestCreator = new RequestCreator(new MongoUserRepository());
    await requestCreator.run({ userId, userIp });

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    if (error instanceof CustomException) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    } else {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
}
