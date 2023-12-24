'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

const AiToolsLayout = async ({ children }: PropsWithChildren): Promise<JSX.Element> => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AiToolsLayout;
