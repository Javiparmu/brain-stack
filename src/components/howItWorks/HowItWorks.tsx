import { FC } from 'react';
import styles from '@/styles/HowItWorks.module.css';
import Image from 'next/image';

interface HowItWorksProps {
  show?: boolean;
}

export const HowItWorks: FC<HowItWorksProps> = ({ show = false }) => {
  return (
    <section id={styles.howItWorks} className={show ? '' : 'hidden'}>
      <h1 className={styles.howItWorksTitle}>How it works</h1>
      <div className={styles.howItWorksGrid}>
        <div className={styles.hiwImage + (show ? '' : ' hidden')}>
          <Image
            className={styles.imageBox}
            src="/images/how-it-works.png"
            alt="how it works"
            width={600}
            height={400}
          />
        </div>
        <div className={styles.hiwText + (show ? '' : ' hidden')}>
          <h3 className={styles.hiwHeading}>1. Create a song</h3>
          <p className={styles.hiwDescription}>
            You can create a song by describing it in words. You can also upload
            an audio file to use as the song base melody or even use our
            selectors to choose the genre, mood and instrument of your generated
            song.
          </p>
          <h3 className={styles.hiwHeading}>2. Download & share</h3>
          <p className={styles.hiwDescription}>
            Download your song and share it with your friends. You can use it as
            the base from your next song.
          </p>
          <h3 className={styles.hiwHeading}>3. Manage your songs</h3>
          <p className={styles.hiwDescription}>
            See the list of all your songs and manage them from your profile
            page. Regenerate any song or download it from there.
          </p>
        </div>
      </div>
    </section>
  );
};
