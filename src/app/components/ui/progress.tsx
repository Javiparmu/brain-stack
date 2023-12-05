import { getProgressPercentage } from '@/utils';
import styles from '@/styles/Ui.module.css';

export function Progress({ progress }: { progress: number }): JSX.Element {
  const progressPercentage = getProgressPercentage(progress);

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}