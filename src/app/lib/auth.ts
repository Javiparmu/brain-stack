import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { UserFinder } from '@/modules/User/application/UserFinder';
import { MongoUserRepository } from '@/modules/User/infrastructure/persistence/MongoUserRepository';
import { compare } from 'bcrypt';
import { UserCreator } from '@/modules/User/application/UserCreator';
import { AuthProvider } from '@/modules/User/domain/value-object/UserAuthProvider';
import { randomUUID } from 'crypto';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'email',
        },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials ?? {};

          if (!email || !password) {
            throw new Error('Invalid credentials');
          }

          const userFinder = new UserFinder(new MongoUserRepository());
          const user = await userFinder.run(email);

          if (!user) return null;

          const isValidPassword = await compare(password, user.password!.value);

          if (!isValidPassword) return null;

          return {
            id: user.id.value,
            email,
            plan: user.plan?.value,
          };
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
  session: {
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!user?.email) return false;
      if (account?.provider === 'credentials') return true;

      const userFinder = new UserFinder(new MongoUserRepository());
      const foundUser = await userFinder.run(user.email);

      if (!foundUser) {
        const userCreator = new UserCreator(new MongoUserRepository());
        await userCreator.run({
          id: randomUUID(),
          email: user.email,
          authProvider: account?.provider as AuthProvider,
        });
      }

      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.userId = token.id as string;
        session.user.plan = token.plan as string;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      } else if (token) {
        const userFinder = new UserFinder(new MongoUserRepository());
        const foundUser = await userFinder.run(token.email!);

        if (foundUser) {
          token.id = foundUser.id.value;
          token.plan = foundUser.plan?.value;
        }
      }

      return token;
    },
  },
};
