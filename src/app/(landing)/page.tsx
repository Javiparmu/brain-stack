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

import { MainHeader, GetStartedButton } from '@/app/components';
import dynamic from 'next/dynamic';
const ShowcaseSection = dynamic(() => import('@/app/components/home/showcase-section'));
const BlurredBg = dynamic(() => import('@/app/components/home/blurred-bg'));
const ProductivitySection = dynamic(() => import('@/app/components/home/productivity-section'));
const CollaborateSection = dynamic(() => import('@/app/components/home/collaborate-section'));
const DiscountSection = dynamic(() => import('@/app/components/home/discount-section'));
const Pricing = dynamic(() => import('@/app/components/pricing/pricing'));
const Footer = dynamic(() => import('@/app/components/ui/footer'));

const Home = () => {
  return (
    <>
      <MainHeader />
      <GetStartedButton />
      <ShowcaseSection />
      <BlurredBg />
      <ProductivitySection />
      <CollaborateSection />
      <Pricing />
      <DiscountSection />
      <Footer />
    </>
  );
};

export default Home;
