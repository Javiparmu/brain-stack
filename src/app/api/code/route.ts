import { CustomException } from '@/backend/Shared/domain/exception/CustomException';
import { RequestCreator } from '@/backend/User/application/RequestCreator';
import { MongoUserRepository } from '@/backend/User/infrastructure/persistence/MongoUserRepository';
import { getUserIp } from '@/app/lib/user-data';
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

import { ChatCompletionMessageParam } from 'openai/resources/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: ChatCompletionMessageParam = {
  role: 'system',
  content:
    'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations. If someone ask you non code questions, you must answer: "I am a code generator chat bot, I can only answer code questions. Try our conversation chat bot to answer that.". Translate that sentence depending on the language of the question.',
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { userId, messages } = body;

    const userIp = getUserIp(req);

    const requestCreator = new RequestCreator(new MongoUserRepository());
    await requestCreator.run({ userId, userIp });

    const response = await openai.chat.completions.create({
      model: 'gpt-4-1106-preview',
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
