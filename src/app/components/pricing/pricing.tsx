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

import styles from '@/app/styles/Pricing.module.css';
import { pricingData } from '@/app/utils';
import { FC, Suspense } from 'react';
import PricingCard from './pricing-card';
import PricingSkeleton from '../skeletons/pricing-skeleton';

export const Pricing: FC = () => {
  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.pricingTitle}>Pricing</h2>
      <h3 className={styles.pricingHeader}>Choose the plan that fits your needs</h3>
      <p className={styles.pricingSubHeader}>
        Your journey towards mastering artificial intelligence begins with a simple choice below.
      </p>
      <svg className={styles.pricingGradient} viewBox="0 0 1208 1024">
        <ellipse cx={604} cy={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512} />
        <defs>
          <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
            <stop stopColor="#7fc5f8" />
            <stop offset={1} stopColor="#4465a3" />
          </radialGradient>
        </defs>
      </svg>
      <div className={styles.pricingContainer}>
        <Suspense fallback={<PricingSkeleton />}>
          <PricingCard plan={pricingData.basic} />
          <PricingCard plan={pricingData.standard} />
          <PricingCard plan={pricingData.premium} />
        </Suspense>
      </div>
    </section>
  );
};
