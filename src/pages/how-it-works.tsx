import { HowItWorks, MainLayout } from '@/components';
import { NextPage } from 'next';
import React from 'react';

const HowItWorksPage: NextPage = () => {
  return (
    <MainLayout>
      <HowItWorks show />
    </MainLayout>
  );
};

export default HowItWorksPage;
