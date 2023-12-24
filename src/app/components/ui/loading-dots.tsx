import styles from '@/app/styles/Dashboard.module.css';
import { FC } from 'react';

const LoadingDots: FC = () => {
  return (
    <div className={styles.loadingResponse}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default LoadingDots;
