import { useEffect, useState } from 'react';
import { maxFreeCounts } from '@/utils/constants';
import { useSubscriptionModal } from '@/store/use-subscription-modal';
import { Progress } from '../ui/progress';
import styles from '@/styles/Ui.module.css';

export const FreeLimitCounter = ({
  isSubscribed = false,
  apiLimitCount = 0,
}: {
  isSubscribed: boolean;
  apiLimitCount: number;
}): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const { onOpen } = useSubscriptionModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
          <button type="button" className={styles.freeButton} onClick={onOpen}>
            Upgrade
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
};
