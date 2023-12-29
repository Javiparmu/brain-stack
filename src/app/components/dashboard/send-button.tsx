import React, { FC } from 'react';
import { SendIcon } from '../icons';
import styles from '@/app/styles/Dashboard.module.css';

interface SendButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const SendButton: FC<SendButtonProps> = ({ disabled, onClick }) => {
  return (
    <button
      title="Send button"
      disabled={disabled}
      className={`${styles.sendButton} ${!disabled ? styles.active : ''}`}
      onClick={onClick}
    >
      <SendIcon styles={styles.sendIcon} size={25} color="#6B6C7B" />
    </button>
  );
};

export default SendButton;
