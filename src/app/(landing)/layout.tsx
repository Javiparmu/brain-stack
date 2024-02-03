import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/ui/navbar';
import styles from '@/app/styles/Home.module.css';
import { auth } from '@/app/lib';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brain Stack',
  description: 'The universal hub for AI generations.',
  keywords: 'ai, brain stack, generation, music, chat, image, video, code, gpt, openai, landing page',
  metadataBase: new URL('https://brain-stack.vercel.app'),
  openGraph: {
    title: 'Brain Stack',
    description: 'Brain Stack - be creative with AI.',
    url: 'https://brain-stack.vercel.app',
    type: 'website',
  },
};

const MainLayout = async ({ children }: PropsWithChildren): Promise<JSX.Element> => {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar session={session} />
        </header>
        <main className={styles.mainContainer}>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
