'use client';

import { PlanEnum } from '@/utils/enums';
import styles from '@/styles/Ui.module.css';
import { useSubscriptionModal } from '@/store/use-subscription-modal';
import { FC, useEffect, useState } from 'react';
import { getPlanFromId } from '@/utils';

interface UpgradeModalProps {
  plan?: PlanEnum;
}

const UpgradeModal: FC<UpgradeModalProps> = ({ plan }) => {
  console.log('plan', plan);
  const [planName, setPlanName] = useState<PlanEnum | null>();

  const { isOpen, onClose } = useSubscriptionModal();

  useEffect(() => {
    setPlanName(getPlanFromId(plan));
  }, [plan]);

  return (
    <dialog
      style={{ display: isOpen ? 'block' : 'none' }}
      className={styles.upgradeModal}
    >
      <button className={styles.closeButton} onClick={onClose}>
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
      <h1>Manage your subscription</h1>
      <p>
        You are currently on the <strong>{planName}</strong> plan. Upgrade to
        get access to more features.
      </p>
      <details className={styles.details} open>
        <summary className={styles.summary}>Get basic plan</summary>
        {planName === PlanEnum.BASIC ? (
          <div>This is your current plan.</div>
        ) : (
          <div>
            <section>
              This plan offers the following features:
              <ul>
                <li>Chat and code AI access</li>
                <li>5 requests / hour</li>
                <li>Email support</li>
                <li>Early new features access</li>
              </ul>
            </section>
            <aside className={styles.upgradeButtonContainer}>
              <button type="button" className={styles.upgradeButton}>
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
            </aside>
          </div>
        )}
      </details>
      <details className={styles.details}>
        <summary className={styles.summary}>Get standard plan</summary>
        {planName === PlanEnum.STANDARD ? (
          <div>This is your current plan.</div>
        ) : (
          <div>
            <section>
              This plan offers the following features:
              <ul>
                <li>Image, video and music AI access</li>
                <li>10 requests / hour</li>
                <li>Priority support</li>
                <li>Early beta features access</li>
              </ul>
            </section>
            <aside className={styles.upgradeButtonContainer}>
              <button type="button" className={styles.upgradeButton}>
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
            </aside>
          </div>
        )}
      </details>
      <details className={styles.details}>
        <summary className={styles.summary}>Get premium plan</summary>
        {planName === PlanEnum.PREMIUM ? (
          <div>This is your current plan.</div>
        ) : (
          <div>
            <section>
              This plan offers the following features:
              <ul>
                <li>All AI functionalities</li>
                <li>20 requests / hour</li>
                <li>24/7 priority support</li>
                <li>Early beta features</li>
                <li>Vote for new features</li>
              </ul>
            </section>
            <aside className={styles.upgradeButtonContainer}>
              <button type="button" className={styles.upgradeButton}>
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
            </aside>
          </div>
        )}
      </details>
    </dialog>
  );
};

export default UpgradeModal;
