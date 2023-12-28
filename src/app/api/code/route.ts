import { CustomException } from '@/modules/Shared/domain/exception/CustomException';
import { RequestCreator } from '@/modules/User/application/RequestCreator';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';
import { getUserIp } from '@/app/lib/user-data';
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

import { ChatCompletionMessageParam } from 'openai/resources/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
});

const instructionMessage: ChatCompletionMessageParam = {
  role: 'system',
  content:
    'You are a code generator. Always use markdown for the response. Dont write only code, always give some explanation of the code. If someone ask you non code related questions, you must answer: "I am a code generator chat bot, I can only answer code questions. Try our conversation chat bot to answer that.". Translate that sentence depending on the language of the question.',
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { userId, messages } = body;

    const userIp = getUserIp(req);

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
