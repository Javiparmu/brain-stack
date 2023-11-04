import React, { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';
import AvatarButton from '@/app/components/ui/avatar-button';
import Image from 'next/image';
import Sidebar from '@/app/components/dashboard/sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

export const metadata: Metadata = {
  title: 'Brain Stack - Dashboard',
  description: 'Brain Stack helps you build everything with AI powered tools.',
  keywords:
    'ai, dashboard, brain stack, generation, music, chat, image, video, code, gpt, openai',
  openGraph: {
    title: 'Brain Stack - Dashboard',
    description:
      'Brain Stack helps you build everything with AI powered tools.',
    url: 'https://brain-stack.com/dashboard',
    type: 'website',
    images: [
      {
        url: 'https://brain-stack.com/images/logo_blue.png',
        width: 800,
        height: 600,
        alt: 'Brain Stack Logo',
      },
    ],
  },
};

const DashboardLayout = async ({
  children,
}: PropsWithChildren): Promise<JSX.Element> => {
  const apiLimitCount = await getApiLimitCount();
  const isSubscribed = await checkSubscription();

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/assets/fonts/n27regular/n27-regular-webfont.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
      </head>
      <body>
        <div className={styles.layoutContainer}>
          <nav className={styles.navbar}>
            <Link href="/dashboard" className={styles.logo}>
              <Image
                width={30}
                height={30}
                src="/images/logo_blue.png"
                alt="logo"
              />
              <span className={styles.logoText}>Brain Stack</span>
            </Link>
            <div className={styles.navItems}>
              <AvatarButton />
            </div>
          </nav>
          <main className={styles.mainContainer}>
            <Sidebar
              apiLimitCount={apiLimitCount}
              isSubscribed={isSubscribed}
            />
            <section className={styles.content}>{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
};

export default DashboardLayout;
