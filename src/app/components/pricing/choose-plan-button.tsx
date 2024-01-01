'use client';

import React, { FC } from 'react';
import styles from '@/app/styles/Ui.module.css';
import { PlanEnum } from '@/app/utils';
import { paymentSession } from '@/app/actions/payment-session';

interface ChoosePlanButtonProps {
  email?: string;
  plan: PlanEnum;
}

const ChoosePlanButton: FC<ChoosePlanButtonProps> = ({ email, plan }) => {
  const handleSubscription = async () => {
    await paymentSession(plan, email);
  };

  return (
    <button onClick={handleSubscription} type="button" className={styles.upgradeButton}>
      Choose this plan
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
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    </button>
  );
};

export default ChoosePlanButton;
