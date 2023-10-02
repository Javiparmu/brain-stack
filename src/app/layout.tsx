import React, { FC, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brain Stack',
  description: 'The universal hub for AI generations.',
  keywords:
    'ai, brain stack, generation, music, chat, image, video, code, gpt, openai, landing page',
  openGraph: {
    title: 'Brain Stack',
    description: 'Brain Stack - be creative with AI.',
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

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
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
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
