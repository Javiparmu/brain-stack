import { sendRegistrationEmail } from '@/app/lib/email';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { UserCreator } from '@/backend/User/application/UserCreator';
import { MongoUserRepository } from '@/backend/User/infrastructure/persistence/MongoUserRepository';
import { UserFinder } from '@/backend/User/application/UserFinder';

export async function POST(req: Request): Promise<NextResponse> {
  const { email, password, userId } = await req.json();

  const userFinder = new UserFinder(new MongoUserRepository());
  const user = await userFinder.run(email);

  if (user) {
    return NextResponse.json({ email, password });
  }

  const hashedPassword = await hash(password, 10);

  const creator = new UserCreator(new MongoUserRepository());
  await creator.run({ id: userId, email, password: hashedPassword });

  const send = await sendRegistrationEmail(email, email.split('@')[0]);

  if (send.error) {
    return NextResponse.json({ status: 500, message: send.error.message });
  }

  return NextResponse.json({ email, password });
}
