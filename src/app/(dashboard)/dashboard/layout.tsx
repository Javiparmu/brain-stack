import React, { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import styles from '@/app/styles/Dashboard.module.css';
import Link from 'next/link';
import AvatarButton from '@/app/components/ui/avatar-button';
import Image from 'next/image';
import Sidebar from '@/app/components/dashboard/sidebar';
import { getApiLimitCount } from '@/app/lib/api-limit';
import { checkSubscription } from '@/app/lib/subscription';
import UpgradeModal from '@/app/components/pricing/upgrade-modal';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { authOptions } from '@/app/lib';
import { getServerSession } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brain Stack - Dashboard',
  description: 'Brain Stack helps you build everything with AI powered tools.',
  keywords: 'ai, dashboard, brain stack, generation, music, chat, image, video, code, gpt, openai',
  openGraph: {
    title: 'Brain Stack - Dashboard',
    description: 'Brain Stack helps you build everything with AI powered tools.',
    url: 'https://brain-stack.com/dashboard',
    type: 'website',
  },
};

const DashboardLayout = async ({ children }: PropsWithChildren): Promise<JSX.Element> => {
  const session = await getServerSession(authOptions);

  const apiLimitCount = await getApiLimitCount(session?.user.userId);
  const subscription = await checkSubscription(session?.user.userId);

  const plan = subscription?.plan;

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            <Image width={30} height={30} src="/images/logo_blue.png" alt="logo" />
            <span className={styles.logoText}>Brain Stack</span>
          </Link>
          <div className={styles.navItems}>
            <AvatarButton isDashboard />
          </div>
        </nav>
        <main className={styles.mainContainer}>
          <Sidebar apiLimitCount={apiLimitCount} isSubscribed={!!plan} />
          <article className={styles.content}>{children}</article>
          <UpgradeModal email={session?.user.email} plan={plan} />
        </main>
      </body>
    </html>
  );
};

export default DashboardLayout;
