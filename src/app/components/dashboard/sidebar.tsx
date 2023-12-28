'use client';

import { CodeIcon, ConversationIcon, DashboardIcon, ImageIcon, MusicIcon, VideoIcon } from '../icons';
import Link from 'next/link';
import styles from '@/app/styles/Dashboard.module.css';
import { usePathname } from 'next/navigation';
import { FreeLimitCounter } from './free-limit-counter';
import { useSidebar } from '@/app/store/use-sidebar';
import CloseButton from '../pricing/close-button';

interface SideBarProps {
  apiLimitCount?: number;
  isSubscribed?: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isSubscribed = false }: SideBarProps): JSX.Element => {
  const pathname = usePathname().split('/')[2];
  const { isOpen: sidebarOpen, onClose: closeSidebar } = useSidebar();

  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.close}`}>
      <CloseButton className={styles.sidebarClose} onClose={closeSidebar} show={sidebarOpen} />
      <ul className={styles.sidebarList}>
        <li>
          <Link onClick={closeSidebar} href="/dashboard">
            <DashboardIcon size={25} color="#359EBB" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            onClick={closeSidebar}
            href="/dashboard/conversation"
            className={pathname === 'conversation' ? styles.activeProduct : ''}
          >
            <ConversationIcon size={25} color="#676bb9" />
            Conversation
          </Link>
        </li>
        <li>
          <Link
            onClick={closeSidebar}
            href="/dashboard/image-generation"
            className={pathname === 'image-generation' ? styles.activeProduct : ''}
          >
            <ImageIcon size={25} color="#e54e4e" />
            Image Generation
          </Link>
        </li>
        <li>
          <Link
            onClick={closeSidebar}
            href="/dashboard/code-generation"
            className={pathname === 'code-generation' ? styles.activeProduct : ''}
          >
            <CodeIcon size={25} color="#3da555" />
            Code Generation
          </Link>
        </li>
        <li>
          <Link
            onClick={closeSidebar}
            href="/dashboard/music-generation"
            className={pathname === 'music-generation' ? styles.activeProduct : ''}
          >
            <MusicIcon size={25} color="#dae560" />
            Music Generation
          </Link>
        </li>
        <li>
          <Link
            onClick={closeSidebar}
            href="/dashboard/video-generation"
            className={pathname === 'video-generation' ? styles.activeProduct : ''}
          >
            <VideoIcon size={25} color="#eab154" />
            Video Generation
          </Link>
        </li>
      </ul>
      <FreeLimitCounter apiLimitCount={apiLimitCount} isSubscribed={isSubscribed} />
    </aside>
  );
};

export default Sidebar;
