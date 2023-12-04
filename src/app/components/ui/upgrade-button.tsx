'use client';

import styles from '@/styles/Ui.module.css';
import { FC } from 'react';

interface UpgradeButtonProps {
  onOpen?: () => void;
}

const UpgradeButton: FC<UpgradeButtonProps> = ({ onOpen }) => {
  return (
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
  );
};

export default UpgradeButton;
