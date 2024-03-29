import styles from '@/app/styles/Dashboard.module.css';
import Link from 'next/link';
import { ChevronRightIcon, CodeIcon, ConversationIcon, ImageIcon, MusicIcon, VideoIcon } from '@/app/components/icons';
import { auth } from '@/app/lib';

export default async function DashboardPage(): Promise<JSX.Element> {
  const session = await auth();

  if (!session) {
    return <h1>Unauthorized</h1>;
  }

  return (
    <>
      <h1 className={styles.title}>Brain Stack Dashboard</h1>
      <h2 className={styles.subTitle}>Try any of our products</h2>
      <section className={styles.productList}>
        <Link className={styles.productCard} href="/dashboard/conversation">
          <div className={styles.cardText}>
            <ConversationIcon styles={`${styles.icon} ${styles.convIcon}`} size={25} color="#676bb9" />
            Conversation
          </div>
          <ChevronRightIcon size={24} color="white" />
        </Link>
        <Link className={styles.productCard} href="/dashboard/image-generation">
          <div className={styles.cardText}>
            <ImageIcon styles={`${styles.icon} ${styles.imgIcon}`} size={25} color="#e54e4e" />
            Image Generation
          </div>
          <ChevronRightIcon size={24} color="white" />
        </Link>
        <Link className={styles.productCard} href="/dashboard/code-generation">
          <div className={styles.cardText}>
            <CodeIcon styles={`${styles.icon} ${styles.codeIcon}`} size={25} color="#3da555" />
            Code Generation
          </div>
          <ChevronRightIcon size={24} color="white" />
        </Link>
        <Link className={styles.productCard} href="/dashboard/music-generation">
          <div className={styles.cardText}>
            <MusicIcon styles={`${styles.icon} ${styles.musicIcon}`} size={25} color="#dae560" />
            Music Generation
          </div>
          <ChevronRightIcon size={24} color="white" />
        </Link>
        <Link className={styles.productCard} href="/dashboard/video-generation">
          <div className={styles.cardText}>
            <VideoIcon styles={`${styles.icon} ${styles.videoIcon}`} size={25} color="#eab154" />
            Video Generation
          </div>
          <ChevronRightIcon size={24} color="white" />
        </Link>
      </section>
    </>
  );
}
