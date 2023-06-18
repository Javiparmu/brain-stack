import styles from '@/styles/Pricing.module.css';
import { MainLayout, Pricing } from '@/components';
import { NextPage } from 'next';

const PricingPage: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.pricingContainer}>
        <Pricing show />
      </div>
    </MainLayout>
  );
};

export default PricingPage;
