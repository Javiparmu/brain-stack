import React, { FC } from 'react';
import styles from '@/app/styles/Checkout.module.css';

const ErrorWithPayment: FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.headerText}>Oops!</h1>
      <p className={styles.paragraphText}>Something went wrong with your payment. Please try again.</p>
      <svg
        className={styles.shoppingIcon}
        width="64"
        height="64"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="9" cy="19" r="2"></circle>
        <circle cx="17" cy="19" r="2"></circle>
        <path d="M17 17h-14v-14h-2"></path>
        <path d="M6 5l14 14"></path>
      </svg>
    </section>
  );
};

export default ErrorWithPayment;
