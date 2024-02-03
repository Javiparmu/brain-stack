import styles from '@/app/styles/Dashboard.module.css';
import { CSSProperties } from 'react';

const LoadingDots = ({ className, style }: { className?: string; style?: CSSProperties }) => {
  return (
    <div style={style} className={className ?? styles.loadingResponse}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default LoadingDots;
