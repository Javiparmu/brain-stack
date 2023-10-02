'use client';

import '@/styles/globals.css';
import styles from '@/styles/Home.module.css';
import { useEffect } from 'react';
import {
  HowItWorks,
  MainHeader,
  Pricing,
  Footer,
  CreateSongButton,
} from '@/components';
import { Metadata, NextPage } from 'next';
import { useAuthStore } from '@/store/authStore';

export const metadata: Metadata = {
  title: 'AI Hub',
  description: 'The universal hub for AI generations.',
  twitter: {
    title: 'AI Hub',
    description: 'The universal hub for AI generations.',
  },
};

const Home: NextPage = () => {
  const { setUser, setToken } = useAuthStore();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user') || 'null'));
    setToken(localStorage.getItem('token') || '');
  }, []);

  return (
    <main className={styles.mainContainer}>
      <MainHeader />
      <CreateSongButton />
      <div style={{ marginTop: 200 }}>
        <div className={styles.backgroundDiv} aria-hidden="true">
          <div
            className={styles.gradientDiv}
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
        <div className={styles.boostTextContainer}>
          <h2 className={styles.boostTitle}>
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className={styles.boostSubtitle}>
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className={styles.buttonContainer}>
            <a href="#" className={styles.primaryButton}>
              Get started
            </a>
            <a href="#" className={styles.secondaryButton}>
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Home;
