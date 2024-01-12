import styles from '@/app/styles/Home.module.css';

export const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <h1 className={styles.title}>
        The <span className={styles.highlight}>easiest </span>
        way to create your own AI <span className={styles.highlight}>generations.</span>{' '}
      </h1>
    </header>
  );
};
