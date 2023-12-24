import styles from '@/app/styles/Checkout.module.css';
import { PaymentStatus } from '@/app/utils/enums';
import Link from 'next/link';

interface Props {
  searchParams: {
    session_id: string;
  };
}

async function CheckoutPage({ searchParams }: Props): Promise<JSX.Element> {
  if (!searchParams.session_id) throw new Error('Please provide a valid session_id (`cs_test_...`)');

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL ?? '' + '/stripe/manage-session', {
    method: 'POST',
    body: JSON.stringify({ sessionId: searchParams.session_id }),
  });

  const payment = await response.json();

  return (
    <main className={styles.mainContainer}>
      {payment.paymentStatus === PaymentStatus.PAID ? (
        <section className={styles.sectionContainer}>
          <h1 className={styles.headerText}>Thank you!</h1>
          <p className={styles.paragraphText}>Your subscription has been successfully processed.</p>
          <svg
            className={styles.shoppingIcon}
            width="64"
            height="64"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248"></path>
            <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
            <path d="M15 19l2 2l4 -4"></path>
          </svg>
          <Link href="/dashboard" className={styles.dashboardLink}>
            Go to dashboard
          </Link>
        </section>
      ) : (
        <section className={styles.sectionContainer}>
          <h1 className={styles.headerText}>Oops!</h1>
          <p className={styles.paragraphText}>Something went wrong with your payment. Please try again.</p>
          <svg
            className={styles.shoppingIcon}
            width="64"
            height="64"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="9" y1="10" x2="9.01" y2="10"></line>
            <line x1="15" y1="10" x2="15.01" y2="10"></line>
            <path d="M9.5 16a10 10 0 0 1 6 -1.5"></path>
          </svg>
        </section>
      )}
    </main>
  );
}

export default CheckoutPage;
