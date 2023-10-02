import styles from '@/styles/Home.module.css';
import {
  HowItWorks,
  MainHeader,
  Pricing,
  Footer,
  CreateSongButton,
  MasonrySongs,
} from '@/app/components';
import Navbar from '@/app/components/ui/navbar';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

const Home: () => Promise<JSX.Element> = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Navbar session={session} />
      <main className={styles.mainContainer}>
        <MainHeader />
        <CreateSongButton />
        <MasonrySongs />
        <HowItWorks />
        <Pricing />
        <Footer />
      </main>
    </>
  );
};

export default Home;
