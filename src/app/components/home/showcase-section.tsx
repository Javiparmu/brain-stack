import Image from 'next/image';
import React, { FC } from 'react';
import styles from '@/styles/Home.module.css';
import dashboardImage from '@/assets/images/image-dashboard.webp';
import dashboardCode from '@/assets/images/code-dashboard.webp';
import dashboardMain from '@/assets/images/main-dashboard.webp';

const ShowcaseSection: FC = () => {
  return (
    <section className={styles.showcaseContainer}>
      <Image
        className={styles.showcaseImage}
        src={dashboardImage}
        sizes="100vw"
        style={{ width: '31vw', height: '33vw' }}
        alt="image generation dashboard"
        priority
      />
      <Image
        className={styles.showcaseMain}
        src={dashboardMain}
        alt="main dashboard"
        priority
      />
      <Image
        className={styles.showcaseCode}
        src={dashboardCode}
        sizes="100vw"
        style={{ width: '31vw', height: 'auto' }}
        alt="code generation dashboard"
        priority
      />
    </section>
  );
};

export default ShowcaseSection;
