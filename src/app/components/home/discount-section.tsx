import React, { FC } from 'react';
import styles from '@/app/styles/home/Discount.module.css';

const DiscountSection: FC = () => {
  return (
    <section className={styles.discountContainer}>
      <div className={styles.discountHeader}>
        <h2 className={styles.discountTitle}>Get a discount</h2>
        <svg
          className="icon icon-tabler icon-tabler-discount-2"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#7fc5f8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 15l6 -6"></path>
          <circle cx="9.5" cy="9.5" r=".5" fill="currentColor"></circle>
          <circle cx="14.5" cy="14.5" r=".5" fill="currentColor"></circle>
          <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path>
        </svg>
      </div>
      <div className={styles.discountContent}>
        <p className={styles.discountText}>Collaborate with us on Github and get a discount on your first purchase.</p>
      </div>
    </section>
  );
};

export default DiscountSection;
