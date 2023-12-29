'use client';

import { maxFreeCounts } from '@/app/utils/constants';
import { useSubscriptionModal } from '@/app/store/use-subscription-modal';
import { Progress } from '../ui/progress';
import styles from '@/app/styles/Ui.module.css';
import UpgradeButton from '../ui/upgrade-button';

export const FreeLimitCounter = ({
  isSubscribed = false,
  apiLimitCount = 0,
}: {
  isSubscribed: boolean;
  apiLimitCount: number;
}): JSX.Element | null => {
  const { onOpen } = useSubscriptionModal();

  if (isSubscribed) {
    return null;
  }

  return (
    <aside className={styles.freeCounter}>
      <div className={styles.freeContainer}>
        <div className={styles.freeInner}>
          <p className={styles.freeText}>
            {apiLimitCount} / {maxFreeCounts} Free Generations
          </p>
          <Progress progress={apiLimitCount} />
          <UpgradeButton onOpen={onOpen} />
        </div>
      </div>
    </aside>
  );
};
