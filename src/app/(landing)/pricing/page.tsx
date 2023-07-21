'use client';

import '@/styles/globals.css';
import styles from '@/styles/Pricing.module.css';
import { Pricing } from '@/components';
import { NextPage } from 'next';

const PricingPage: NextPage = () => {
  return (
    <div className={styles.pricingContainer}>
      <Pricing />
    </div>
  );
};

export default PricingPage;
