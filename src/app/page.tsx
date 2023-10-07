// Copyright 2023 Brain Stack

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
