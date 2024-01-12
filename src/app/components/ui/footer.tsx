import styles from '@/app/styles/home/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerHome}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>© 2023 Brain Stack. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
