import React, { FC } from 'react';
import styles from '@/styles/Home.module.css';

const DiscountSection: FC = () => {
  return (
    <section className={styles.discountContainer}>
      <h1 className={styles.discountHeader}>Get a discount</h1>
      <div className={styles.discountContent}>
        <p className={styles.discountText}>
          Collaborate with us on Github and get a discount on your first
          purchase.
        </p>
      </div>
    </section>
  );
};

export default DiscountSection;
