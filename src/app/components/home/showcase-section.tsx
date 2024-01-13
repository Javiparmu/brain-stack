import Image from 'next/image';
import styles from '@/app/styles/home/Showcase.module.css';
import dashboardImage from '@/app/assets/images/image-dashboard.webp';
import dashboardCode from '@/app/assets/images/code-dashboard.webp';
import dashboardMain from '@/app/assets/images/main-dashboard.webp';

const ShowcaseSection = () => {
  return (
    <section className={styles.showcaseContainer}>
      <Image
        className={styles.showcaseImage}
        src={dashboardImage}
        sizes="100vw"
        style={{ width: '31vw', height: 'auto' }}
        alt="image generation dashboard"
      />
      <Image className={styles.showcaseMain} src={dashboardMain} alt="main dashboard" fetchPriority="high" loading="eager" />
      <Image
        className={styles.showcaseCode}
        src={dashboardCode}
        sizes="100vw"
        style={{ width: '31vw', height: 'auto' }}
        alt="code generation dashboard"
      />
    </section>
  );
};

export default ShowcaseSection;
