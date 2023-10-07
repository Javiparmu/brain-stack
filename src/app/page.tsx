import styles from '@/styles/Home.module.css';
import { MainHeader, Pricing, GetStartedButton } from '@/app/components';
import Navbar from '@/app/components/ui/navbar';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import BlurredBg from './components/home/blurred-bg';
import ProductivitySection from './components/home/productivity-section';
import ShowcaseSection from './components/home/showcase-section';
import LinesGroup from './components/ui/lines-group';
import CollaborateSection from './components/home/collaborate-section';

const Home: () => Promise<JSX.Element> = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Navbar session={session} />
      <div className={styles.bgWrapper}>
        <div className={styles.bgTiles}></div>
        <LinesGroup />
      </div>
      <main className={styles.mainContainer}>
        <MainHeader />
        <GetStartedButton />
        <ShowcaseSection />
        <BlurredBg />
        <ProductivitySection />
        <CollaborateSection />
        <Pricing />
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Home;
