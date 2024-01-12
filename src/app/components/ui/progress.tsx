import { getProgressPercentage } from '@/app/utils';
import styles from '@/app/styles/Ui.module.css';

export function Progress({ progress }: { progress: number }) {
  const progressPercentage = getProgressPercentage(progress);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
    </div>
  );
}
