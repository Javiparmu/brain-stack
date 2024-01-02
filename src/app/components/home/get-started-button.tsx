import styles from '@/app/styles/Home.module.css';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

async function GetStartedButton(): Promise<JSX.Element> {
  const session = await getServerSession();

  return (
    <div className={styles.container}>
      <div className={`${styles.textContainer} ${styles.hideOnMobile}`}>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>Try our</p>
        <p className={`${styles.textBold} ${styles.centerOnMobile}`}>new</p>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>tools</p>
      </div>
      <Link className={styles.link} href={session ? '/dashboard' : '/auth/signin'}>
        <button className={styles.button}>Get Started</button>
      </Link>
      <div className={`${styles.textContainer} ${styles.hideOnMobile}`}>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>for</p>
        <p className={`${styles.textBold} ${styles.centerOnMobile}`}>free</p>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>right now</p>
      </div>
    </div>
  );
}

export default GetStartedButton;
