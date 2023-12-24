import styles from '@/app/styles/Pricing.module.css';
import { FC } from 'react';

const PricingSkeleton: FC = () => {
  return (
    <div className={styles.pricingSkeleton}>
      <div className={styles.pricingCardSkeleton}></div>
      <div className={styles.pricingMiddleCardSkeleton}></div>
      <div className={styles.pricingCardSkeleton}></div>
    </div>
  );
};

export default PricingSkeleton;
