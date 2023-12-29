'use client';

import styles from '@/app/styles/home/Pricing.module.css';
import CheckIcon from './check-icon';
import CrossIcon from './cross-icon';
import { createCheckoutSession } from '@/app/actions/stripe';
import { PlanEnum } from '@/app/utils/enums';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FC, useState } from 'react';
import { getCanSubscribe, getPlanFromId, getPlanId } from '@/app/utils';

interface PricingCardProps {
  plan: {
    name: PlanEnum;
    title: string;
    subtitle: string;
    price: number;
    features: {
      available: boolean;
      text: string;
    }[];
  };
}

const PricingCard: FC<PricingCardProps> = ({ plan }) => {
  const router = useRouter();
  const session = useSession();

  const [isLoading, setIsLoading] = useState(false);

  const user = session?.data?.user;

  const isStandard = plan.name === PlanEnum.STANDARD;

  const canSubscribe = getCanSubscribe(user?.plan ?? '', getPlanId(plan.name));

  const handlePayment = async () => {
    if (!user?.email) {
      router.push('/auth/signin');
      return;
    }

    try {
      setIsLoading(true);
      await createCheckoutSession(user.email, plan.name);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={styles.pricingCard}
      style={
        isStandard
          ? {
              outlineWidth: 4,
              outlineColor: '#389ABB',
              outlineStyle: 'solid',
              scale: '1.05',
              filter: 'drop-shadow(0px 0px 1rem rgba(56, 154, 187, 0.5))',
            }
          : {
              outline: 'none',
              filter: 'drop-shadow(0px 0px 0.5rem rgba(151, 156, 231, 0.5))',
            }
      }
    >
      <div>
        <h3 className={styles.pricingCardHeader} style={isStandard ? { color: '#389ABB' } : { outline: '#979ce7' }}>
          {plan.title}
        </h3>
        <p className={styles.pricingCardSubHeader}>{plan.subtitle}</p>
        <p className={styles.pricingCardText}>
          <span className={styles.pricingCardPrice}>${plan.price}</span>
          <span className={styles.pricingCardTime}>/month</span>
        </p>
        <ul className={styles.pricingCardList}>
          {plan.features.map((item, index) => (
            <li key={index} className={styles.pricingCardListItem}>
              {item.available ? (
                <CheckIcon color={isStandard ? '#389ABB' : '#979ce7'} />
              ) : (
                <CrossIcon color={isStandard ? '#389ABB' : '#979ce7'} />
              )}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pricingButtonContainer}>
        {!canSubscribe && (
          <span className={styles.currentPlan}>You are currently on the {getPlanFromId(user?.plan)} plan.</span>
        )}
        <button
          onClick={async () => await handlePayment()}
          type="submit"
          className={`${styles.pricingCardButton} ${isStandard ? styles.standard : styles.normal}`}
          disabled={isLoading || !canSubscribe}
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
