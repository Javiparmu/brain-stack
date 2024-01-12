import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { InvalidRequestException } from '@/modules/Shared/domain/exception/InvalidRequestException';
import { UserFinder } from '@/modules/User/application/UserFinder';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';
import { compare } from 'bcryptjs';

const authConfig = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const { email, password } = credentials as { email: string; password: string };

          if (!email || !password) {
            throw new InvalidRequestException('Invalid credentials');
          }

          const userFinder = new UserFinder(new MongoUserRepository());
          const user = await userFinder.run(email);

          if (!user) return null;

          const isValidPassword = await compare(password, user.password!.value);

          if (!isValidPassword) return null;

          return user.toPrimitives();
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
};

export default authConfig;
