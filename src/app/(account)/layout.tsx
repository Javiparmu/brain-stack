import React, { PropsWithChildren } from 'react';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import styles from '@/app/styles/Home.module.css';
import BackgroundTiles from '../components/ui/background-tiles';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brain Stack - Sign In',
  description: 'The universal hub for AI generations.',
  keywords: 'ai, brain stack, generation, music, chat, image, video, code, gpt, openai, sign in',
  metadataBase: new URL('https://brain-stack.vercel.app'),
  openGraph: {
    title: 'Brain Stack - Sign In',
    description: 'Sign in to Brain Stack.',
    url: 'https://brain-stack.vercel.app',
    type: 'website',
  },
};

const AuthLayout = async ({ children }: PropsWithChildren): Promise<JSX.Element> => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundTiles />
        <main className={`${styles.mainContainer} ${inter.className}`}>{children}</main>
      </body>
    </html>
  );
};

export default AuthLayout;
