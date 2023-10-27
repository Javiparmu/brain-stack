// Copyright 2023 Brain Stack

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import styles from '@/styles/Home.module.css';
import {
  MainHeader,
  Pricing,
  GetStartedButton,
  Footer,
} from '@/app/components';
import Navbar from '@/app/components/ui/navbar';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import BlurredBg from './components/home/blurred-bg';
import ProductivitySection from './components/home/productivity-section';
import ShowcaseSection from './components/home/showcase-section';
import CollaborateSection from './components/home/collaborate-section';
import DiscountSection from './components/home/discount-section';

const Home: () => Promise<JSX.Element> = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <header>
        <Navbar session={session} />
        <div className={styles.bgWrapper}>
          <div className={styles.bgTiles}></div>
        </div>
      </header>
      <main className={styles.mainContainer}>
        <MainHeader />
        <GetStartedButton />
        <ShowcaseSection />
        <BlurredBg />
        <ProductivitySection />
        <CollaborateSection />
        <Pricing />
        <DiscountSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
