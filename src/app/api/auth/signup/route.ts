import dbConnect from '@/db/mongoose';
import { sendRegistrationEmail } from '@/lib/email';
import User from '@/models/User';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  await dbConnect();

  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ message: 'Missing email or password.' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    const hashedPassword = await hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    console.log('user', user);

    if (!user) {
      throw new Error('Could not create user');
    }

    const send = await sendRegistrationEmail(email, email.split('@')[0]);

    console.log('send', send);

    if (send.error) {
      return NextResponse.json({ status: 500, message: send.error.message });
    }
  }

  return NextResponse.json({ email, password });
}
