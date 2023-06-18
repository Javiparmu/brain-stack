import styles from '@/styles/HowItWorks.module.css';
import { HowItWorks, MainLayout } from '@/components';
import { NextPage } from 'next';
import React from 'react';

const HowItWorksPage: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.howItWorksContainer}>
        <HowItWorks show />
      </div>
    </MainLayout>
  );
};

export default HowItWorksPage;
