'use client';

import { PlanEnum } from '@/app/utils/enums';
import styles from '@/app/styles/Ui.module.css';
import { useSubscriptionModal } from '@/app/store/use-subscription-modal';
import { FC } from 'react';
import { getCanSubscribe, getPlanFromId, getPlanId } from '@/app/utils';
import ChoosePlanButton from './choose-plan-button';
import CloseButton from './close-button';
import { useClickOutside } from '@/app/hooks/use-click-outside';

interface UpgradeModalProps {
  email?: string;
  plan?: string;
}

const UpgradeModal: FC<UpgradeModalProps> = ({ email, plan }) => {
  const planName = getPlanFromId(plan);

  const { isOpen, onClose } = useSubscriptionModal();
  const upgradeModalRef = useClickOutside<HTMLDialogElement>(isOpen, onClose);

  return (
    <div className={`${styles.modalBackdrop} ${isOpen ? styles.visible : ''}`}>
      <dialog ref={upgradeModalRef} open={isOpen} className={styles.upgradeModal}>
        <CloseButton onClose={onClose} />
        <h1>Manage your subscription</h1>
        <p>
          You are currently on the <strong>{planName}</strong> plan. Upgrade to get access to more features.
        </p>
        <details name="subscription-plan" className={styles.details} open>
          <summary className={styles.summary}>Get basic plan</summary>
          {!getCanSubscribe(getPlanId(PlanEnum.BASIC), plan) ? (
            <div>You are currently on the {planName} plan.</div>
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
                <ChoosePlanButton email={email} plan={PlanEnum.BASIC} />
              </aside>
            </div>
          )}
        </details>
        <details name="subscription-plan" className={styles.details}>
          <summary className={styles.summary}>Get standard plan</summary>
          {!getCanSubscribe(getPlanId(PlanEnum.STANDARD), plan) ? (
            <div>You are currently on the {planName} plan.</div>
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
                <ChoosePlanButton email={email} plan={PlanEnum.STANDARD} />
              </aside>
            </div>
          )}
        </details>
        <details name="subscription-plan" className={styles.details}>
          <summary className={styles.summary}>Get premium plan</summary>
          {!getCanSubscribe(getPlanId(PlanEnum.PREMIUM), plan) ? (
            <div>You are currently on the {planName} plan.</div>
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
                <ChoosePlanButton email={email} plan={PlanEnum.PREMIUM} />
              </aside>
            </div>
          )}
        </details>
      </dialog>
    </div>
  );
};

export default UpgradeModal;
