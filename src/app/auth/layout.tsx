import React, { PropsWithChildren } from 'react';
import '../globals.css';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const MainLayout = async ({
  children,
}: PropsWithChildren): Promise<JSX.Element> => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={`${styles.mainContainer} ${inter.className}`}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default MainLayout;