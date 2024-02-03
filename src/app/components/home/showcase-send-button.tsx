import { memo } from 'react';
import LoadingDots from '../ui/loading-dots';
import { SendIcon } from '../icons';
import styles from '@/app/styles/home/Showcase.module.css';

const ShowcaseSendButton = memo(function ShowcaseSendButton({ loading }: { loading: boolean }) {
  return (
    <div className={styles.sendButton}>
      {loading ? <LoadingDots style={{ right: '-3px' }} /> : <SendIcon styles={styles.sendIcon} size={20} />}
    </div>
  );
});

export default ShowcaseSendButton;
