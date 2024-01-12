import styles from '@/app/styles/Dashboard.module.css';

const LoadingDots = () => {
  return (
    <div className={styles.loadingResponse}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default LoadingDots;
