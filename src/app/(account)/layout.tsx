import React, { PropsWithChildren } from 'react';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import styles from '@/app/styles/Home.module.css';
import BackgroundTiles from '../components/ui/background-tiles';

const inter = Inter({ subsets: ['latin'] });

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
