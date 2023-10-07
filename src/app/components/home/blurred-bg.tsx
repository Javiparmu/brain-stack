import React, { FC } from 'react';
import styles from '@/styles/Home.module.css';

const BlurredBg: FC = () => {
  return (
    <div className={styles.backgroundDiv} aria-hidden="true">
      <div
        className={styles.gradientDiv}
        style={{
          clipPath:
            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
        }}
      />
    </div>
  );
};

export default BlurredBg;
