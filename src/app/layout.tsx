import React, { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/ui/navbar';
import { getServerSession } from 'next-auth';
import styles from '@/styles/Home.module.css';
import { authOptions } from '@/lib/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brain Stack',
  description: 'The universal hub for AI generations.',
  keywords:
    'ai, brain stack, generation, music, chat, image, video, code, gpt, openai, landing page',
  // openGraph: {
  //   title: 'Brain Stack',
  //   description: 'Brain Stack - be creative with AI.',
  //   url: 'https://brain-stack.vercel.app/dashboard',
  //   type: 'website',
  // },
};

const MainLayout = async ({
  children,
}: PropsWithChildren): Promise<JSX.Element> => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar session={session} />
          <div className={styles.bgWrapper}>
            <div className={styles.bgTiles}></div>
          </div>
        </header>
        <main className={`${styles.mainContainer} ${inter.className}`}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default MainLayout;
