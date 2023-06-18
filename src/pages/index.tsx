import styles from '@/styles/Home.module.css';
import { useEffect } from 'react';
import {
  HowItWorks,
  MainHeader,
  Pricing,
  MainLayout,
  Footer,
  CreateSongButton,
  MasonrySongs,
} from '@/components';
import { createObservers } from '@/utils/helpers';
import { NextPage } from 'next';
import { useAuthStore } from '@/store/authStore';

const Home: NextPage = () => {
  const { setUser, setToken } = useAuthStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(localStorage.getItem('user') || 'null'));
      setToken(localStorage.getItem('token') || '');
    }

    createObservers();
  }, []);

  return (
    <MainLayout>
      <div className={styles.mainContainer}>
        <MainHeader />
        <CreateSongButton />
        <MasonrySongs />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Home;
