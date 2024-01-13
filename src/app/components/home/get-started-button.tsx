import styles from '@/app/styles/Home.module.css';
import Link from 'next/link';

interface GetStartedButtonProps {
  isLoggedIn: boolean;
}

const GetStartedButton = ({ isLoggedIn }: GetStartedButtonProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.textContainer} ${styles.hideOnMobile}`}>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>Try our</p>
        <p className={`${styles.textBold} ${styles.centerOnMobile}`}>new</p>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>tools</p>
      </div>
      <Link className={styles.link} href={isLoggedIn ? '/dashboard' : '/auth/signin'}>
        <button className={styles.button}>Get Started</button>
      </Link>
      <div className={`${styles.textContainer} ${styles.hideOnMobile}`}>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>for</p>
        <p className={`${styles.textBold} ${styles.centerOnMobile}`}>free</p>
        <p className={`${styles.text} ${styles.centerOnMobile}`}>right now</p>
      </div>
    </div>
  );
};

export default GetStartedButton;
