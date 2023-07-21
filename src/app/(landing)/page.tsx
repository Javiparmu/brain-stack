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
  MasonrySongs,
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
    <div className={styles.mainContainer}>
      <MainHeader />
      <CreateSongButton />
      <MasonrySongs />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
