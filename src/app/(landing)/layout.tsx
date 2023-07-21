import React, { FC } from 'react';
import { Navbar } from '@/components/ui/Navbar';

interface MainLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
