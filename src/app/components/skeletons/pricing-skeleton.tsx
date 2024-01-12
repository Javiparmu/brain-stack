import styles from '@/app/styles/home/Pricing.module.css';

const PricingSkeleton = () => {
  return (
    <div className={styles.pricingSkeleton}>
      <div className={styles.pricingCardSkeleton}></div>
      <div className={styles.pricingMiddleCardSkeleton}></div>
      <div className={styles.pricingCardSkeleton}></div>
    </div>
  );
};

export default PricingSkeleton;
