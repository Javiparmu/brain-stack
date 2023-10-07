import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import React, { FC } from 'react';

export const GetStartedButton: FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.textContainer} ${styles.hideOnMobile}`}>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>Try our</p>
        <p className={`${styles.textBold} ${styles.centerOnMobile}`}>new</p>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>tools</p>
      </div>
      <Link className={styles.link} href="/dashboard/song-generator">
        <button className={styles.button}>Get Started</button>
      </Link>
      <div className={`${styles.textContainer} ${styles.hideOnMobile}`}>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>for</p>
        <p className={`${styles.textBold} ${styles.centerOnMobile}`}>free</p>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>right now</p>
      </div>
    </div>
  );
};
