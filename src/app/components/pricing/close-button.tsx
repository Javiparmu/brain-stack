import React, { FC } from 'react';
import styles from '@/app/styles/Ui.module.css';

interface CloseButtonProps {
  className?: string;
  show?: boolean;
  side?: 'left' | 'right';
  onClose: () => void;
}

const CloseButton: FC<CloseButtonProps> = ({ className, show = true, onClose, side = 'right' }) => {
  return (
    <button
      title="Close button"
      className={`${styles.closeButton} ${className} ${!show && styles.hidden} ${
        side === 'right' ? styles.right : styles.left
      }`}
      onClick={onClose}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-x"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

export default CloseButton;
