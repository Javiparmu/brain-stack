import Image from 'next/image';
import styles from '@/styles/Pricing.module.css';
import { pricingData } from '@/utils';
import { FC } from 'react';

interface PricingProps {
  show?: boolean;
}

export const Pricing: FC<PricingProps> = ({ show = false }) => {
  return (
    <section className={show ? '' : 'hidden'}>
      <div>
        <h2 className={styles.pricingTitle}>Pricing</h2>
        <div className={styles.pricingGrid}>
          {pricingData.map((card, index) => (
            <div
              className={`${styles.pricingCard} ${
                index === 1 ? styles.secondCard : ''
              }`}
              key={index}
            >
              <div>
                <h3 className={styles.pricingPlan}>{card.plan}</h3>
                <p className={styles.pricingFrequency}>Monthly</p>
                <div className={styles.divider} />
                {card.features.map((feature, index) => (
                  <div className={styles.feature} key={index}>
                    <Image
                      src={
                        feature.available
                          ? '/images/icons/check-icon.svg'
                          : '/images/icons/cross-icon.svg'
                      }
                      alt={feature.available ? 'available' : 'not available'}
                      width={24}
                      height={24}
                      style={{ marginRight: '10px' }}
                    />
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
              <div>
                <h2 className={styles.pricingPrice}>{card.price}€</h2>
                <p className={styles.monthlyRate}>/month</p>
                <button className={styles.pricingButton}>Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
