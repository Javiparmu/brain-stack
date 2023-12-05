'use client';

import { PlanEnum } from '@/utils/enums';
import styles from '@/styles/Ui.module.css';
import { useSubscriptionModal } from '@/store/use-subscription-modal';
import { FC, useEffect, useState } from 'react';
import { getPlanFromId } from '@/utils';
import ChoosePlanButton from './choose-plan-button';
import CloseButton from './close-button';

interface UpgradeModalProps {
  plan?: PlanEnum;
}

const UpgradeModal: FC<UpgradeModalProps> = ({ plan }) => {
  const [planName, setPlanName] = useState<PlanEnum | null>();

  const { isOpen, onClose } = useSubscriptionModal();

  useEffect(() => {
    setPlanName(getPlanFromId(plan));
  }, [plan]);

  return (
    <div className={isOpen ? styles.modalBackdrop : styles.hidden}>
      <dialog className={isOpen ? styles.upgradeModal : styles.hidden}>
        <CloseButton onClose={onClose} />
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
                <ChoosePlanButton />
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
                <ChoosePlanButton />
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
                <ChoosePlanButton />
              </aside>
            </div>
          )}
        </details>
      </dialog>
    </div>
  );
};

export default UpgradeModal;
