'use client';

import '@/styles/globals.css';
import styles from '@/styles/HowItWorks.module.css';
import { HowItWorks } from '@/components';
import { NextPage } from 'next';
import React from 'react';

const HowItWorksPage: NextPage = () => {
  return (
    <div className={styles.howItWorksContainer}>
      <HowItWorks />
    </div>
  );
};

export default HowItWorksPage;
