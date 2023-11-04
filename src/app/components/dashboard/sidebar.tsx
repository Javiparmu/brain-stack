'use client';

import {
  CodeIcon,
  ConversationIcon,
  DashboardIcon,
  ImageIcon,
  MusicIcon,
  VideoIcon,
} from '../icons';
import Link from 'next/link';
import styles from '@/styles/Dashboard.module.css';
import { usePathname } from 'next/navigation';
import { FreeLimitCounter } from './free-limit-counter';

interface SideBarProps {
  apiLimitCount?: number;
  isSubscribed?: boolean;
}

const Sidebar = ({
  apiLimitCount = 0,
  isSubscribed = false,
}: SideBarProps): JSX.Element => {
  const pathname = usePathname().split('/')[2];

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li>
          <Link href="/dashboard">
            <DashboardIcon size={25} color="#359EBB" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/conversation"
            className={pathname === 'conversation' ? styles.activeProduct : ''}
          >
            <ConversationIcon size={25} color="#676bb9" />
            Conversation
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/image-generation"
            className={
              pathname === 'image-generation' ? styles.activeProduct : ''
            }
          >
            <ImageIcon size={25} color="#e54e4e" />
            Image Generation
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/code-generation"
            className={
              pathname === 'code-generation' ? styles.activeProduct : ''
            }
          >
            <CodeIcon size={25} color="#3da555" />
            Code Generation
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/music-generation"
            className={
              pathname === 'music-generation' ? styles.activeProduct : ''
            }
          >
            <MusicIcon size={25} color="#dae560" />
            Music Generation
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/video-generation"
            className={
              pathname === 'video-generation' ? styles.activeProduct : ''
            }
          >
            <VideoIcon size={25} color="#eab154" />
            Video Generation
          </Link>
        </li>
      </ul>
      <FreeLimitCounter
        apiLimitCount={apiLimitCount}
        isSubscribed={isSubscribed}
      />
    </aside>
  );
};

export default Sidebar;
