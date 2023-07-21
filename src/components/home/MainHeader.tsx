import styles from '@/styles/Home.module.css';
import React, { FC } from 'react';

export const MainHeader: FC = () => {
  return (
    <div className={styles.mainHeader}>
      <h1 className={styles.title}>
        The <span className={styles.highlight}>easiest </span>
        way to create your own AI generated{' '}
        <span className={styles.highlight}>voices.</span>{' '}
      </h1>
    </div>
  );
};
