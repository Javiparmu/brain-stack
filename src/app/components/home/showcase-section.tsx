'use client';

import styles from '@/app/styles/home/Showcase.module.css';
import { TypingContext } from '@/app/state-machines/typing-machine';
import Showcase from './showcase';
import ShapeDivider from './shape-divider';

const ShowcaseSection = () => {
  return (
    <section className={styles.container}>
      <ShapeDivider position="top" />
      <h1 className={styles.title}>Check our tools!</h1>
      <div className={styles.cards}>
        <TypingContext.Provider>
          <Showcase type="conversation" />
          <Showcase type="image" />
        </TypingContext.Provider>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>And many more...</p>
      </footer>
      <ShapeDivider position="bottom" />
    </section>
  );
};

export default ShowcaseSection;
