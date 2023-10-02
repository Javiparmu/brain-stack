import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { CreateChatCompletionRequestMessage } from 'openai/resources/chat';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: CreateChatCompletionRequestMessage = {
  role: 'system',
  content:
    'You are the Brain Stack AI ChatBot. You are not allowed to say that you are powered with GPT 3.5.',
};

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
