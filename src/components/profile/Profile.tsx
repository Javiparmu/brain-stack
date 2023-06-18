import styles from '@/styles/Profile.module.css';
import { SideBar } from '../ui/SideBar';
import { FC } from 'react';

export const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <SideBar />
    </div>
  );
};
