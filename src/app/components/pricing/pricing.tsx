import styles from '@/styles/Pricing.module.css';
import { pricingData } from '@/utils';
import { FC } from 'react';
import PricingCard from './pricing-card';

export const Pricing: FC = () => {
  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.pricingTitle}>Pricing</h2>
      <h3 className={styles.pricingHeader}>
        Choose the plan that fits your needs
      </h3>
      <p className={styles.pricingSubHeader}>
        Your journey towards mastering artificial intelligence begins with a
        simple choice below.
      </p>
      <svg className={styles.pricingGradient} viewBox="0 0 1208 1024">
        <ellipse
          cx={604}
          cy={512}
          fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
          rx={604}
          ry={512}
        />
        <defs>
          <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
            <stop stopColor="#7fc5f8" />
            <stop offset={1} stopColor="#4465a3" />
          </radialGradient>
        </defs>
      </svg>
      <div className={styles.pricingContainer}>
        <PricingCard plan={pricingData.basic} />
        <PricingCard plan={pricingData.standard} />
        <PricingCard plan={pricingData.premium} />
      </div>
    </section>
  );
};
