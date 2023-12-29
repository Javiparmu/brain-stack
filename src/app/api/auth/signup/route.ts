import { sendRegistrationEmail } from '@/app/lib/email';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';
import { UserCreator } from '@/modules/User/application/UserCreator';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';
import { UserFinder } from '@/modules/User/application/UserFinder';

export async function POST(req: Request): Promise<NextResponse> {
  const { email, password, userId } = await req.json();

  console.log('sign up', { email, password, userId });

  const userFinder = new UserFinder(new MongoUserRepository());
  const user = await userFinder.run(email);

  console.log('user', user);

  if (user) {
    return NextResponse.json({ email, password });
  }

  const hashedPassword = await hash(password, 10);

  const creator = new UserCreator(new MongoUserRepository());
  await creator.run({ id: userId, email, password: hashedPassword, authProvider: 'credentials' });

  console.log('user created');

  const send = await sendRegistrationEmail(email, email.split('@')[0]);

  console.log('email sent', send);

  if (send.error) {
    return NextResponse.json({ status: 500, message: send.error.message });
  }

  return NextResponse.json({ email, password });
}
