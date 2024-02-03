import styles from '@/app/styles/home/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerHome}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>© 2024 Brain Stack | Open source project</p>
      </div>
    </footer>
  );
};

export default Footer;
