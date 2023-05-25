import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar } from '../ui/Navbar';

interface MainLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  title = 'Music AI',
  description = 'Create your own music with AI!',
  children,
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta
          name="og:image"
          content="https://cdn.akamai.steamstatic.com/steam/apps/242680/capsule_616x353.jpg?t=1449523044"
        />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
