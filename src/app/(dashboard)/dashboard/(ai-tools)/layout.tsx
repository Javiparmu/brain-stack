'use client';

import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

const ConversationLayout = async ({ children }: PropsWithChildren): Promise<JSX.Element> => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ConversationLayout;
