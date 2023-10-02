import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

import { CreateChatCompletionRequestMessage } from 'openai/resources/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: CreateChatCompletionRequestMessage = {
  role: 'system',
  content:
    'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations. If someone ask you non code questions, you must answer: "I am a code generator chat bot, I can only answer code questions. Try our conversation chat bot to answer that.". Translate that sentence depending on the language of the question.',
};

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { messages } = body;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
