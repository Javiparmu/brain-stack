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

import styles from '@/app/styles/home/Pricing.module.css';
import { pricingData } from '@/app/utils';
import PricingSkeleton from '../skeletons/pricing-skeleton';
import { SessionProvider } from 'next-auth/react';
import { Suspense } from 'react';
import PricingCard from './pricing-card';

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.pricingTitle}>Pricing</h2>
      <h3 className={styles.pricingHeader}>Choose the plan that fits your needs</h3>
      <p className={styles.pricingSubHeader}>Your journey towards mastering artificial intelligence begins with a simple choice below.</p>
      <div className={styles.pricingContainer}>
        <SessionProvider>
          <Suspense fallback={<PricingSkeleton />}>
            <PricingCard plan={pricingData.basic} />
            <PricingCard plan={pricingData.standard} />
            <PricingCard plan={pricingData.premium} />
          </Suspense>
        </SessionProvider>
      </div>
    </section>
  );
};

export default Pricing;
