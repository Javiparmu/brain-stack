import styles from '@/styles/Pricing.module.css';
import CheckIcon from './check-icon';
import CrossIcon from './cross-icon';
import { createCheckoutSession } from '@/app/actions/stripe';
import { PlanEnum } from '@/utils/enums';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import dbConnect from '@/db/mongoose';
import User from '@/models/User';

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

async function PricingCard({ plan }: PricingCardProps): Promise<JSX.Element> {
  const session = await getServerSession();

  const email = session?.user?.email;

  const isStandard = plan.title === 'Standard';

  const handlePayment = async (formData: FormData) => {
    'use server';
    if (!email) {
      redirect('/auth/login');
    }

    await dbConnect();

    const user = await User.findOne({ email });

    if (!user) {
      redirect('/auth/signup');
    }

    formData.append('email', email);
    formData.append('plan', plan.name);

    await createCheckoutSession(formData);
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
        <h3
          className={styles.pricingCardHeader}
          style={isStandard ? { color: '#389ABB' } : { outline: '#979ce7' }}
        >
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
      <form action={handlePayment}>
        <button
          type="submit"
          className={`${styles.pricingCardButton} ${
            isStandard ? styles.standard : styles.normal
          }`}
        >
          Choose plan
        </button>
      </form>
    </div>
  );
}

export default PricingCard;
