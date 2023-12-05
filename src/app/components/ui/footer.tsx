import styles from '@/styles/Home.module.css';
import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className={styles.footerHome}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          © 2023 Brain Stack. All rights reserved
        </p>
      </div>
    </footer>
  );
};
