import React, { FC } from 'react';
import styles from '@/app/styles/Home.module.css';

const BackgroundTiles: FC = () => {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.bgTiles}></div>
    </div>
  );
};

export default BackgroundTiles;
