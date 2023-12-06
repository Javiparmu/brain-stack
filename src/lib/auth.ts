import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import dbConnect from '@/db/mongoose';
import User from '@/services/db/models/mongoose/User';
import { compare } from 'bcrypt';

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

          await dbConnect();

          const user = await User.findOne({ email });

          if (!user) {
            throw new Error('Invalid credentials');
          }

          const isMatch = await compare(password, user.password);

          if (!isMatch) {
            throw new Error('Invalid credentials');
          }

          return {
            id: user._id,
            email: user.email,
          };
        } catch (error) {
          console.log('error', error);

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
    async signIn() {
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session }) {
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
};
