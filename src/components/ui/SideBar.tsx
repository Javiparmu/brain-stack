import styles from '@/styles/Profile.module.css';
import { useState, FC } from 'react';
import { FiHome } from 'react-icons/fi';
import { MdLibraryMusic, MdAttachMoney } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { SideBarItem, SideBarHoverBox } from '@/components';

type SideBarItems = 'dashboard' | 'mySongs' | 'payments' | 'settings';

export const SideBar: FC = () => {
  const user = {
    username: 'John Doe',
    avatar: 'https://bit.ly/broken-link',
    email: '123',
  };

  const [selectedItem, setSelectedItem] = useState<SideBarItems>('dashboard');
  const [navSize, setNavSize] = useState<'small' | 'large'>('large');

  const onItemClick = (item: string) => {
    setSelectedItem(item as SideBarItems);
  };

  return (
    <div
      className={`${styles.sideBar} ${navSize}`}
      onClick={() => setNavSize(navSize === 'small' ? 'large' : 'small')}
    >
      <SideBarItem
        navSize={navSize}
        title="Dashboard"
        icon={FiHome}
        active={selectedItem === 'dashboard'}
        onClick={() => onItemClick('dashboard')}
      />
      <SideBarItem
        navSize={navSize}
        title="My songs"
        icon={MdLibraryMusic}
        active={selectedItem === 'mySongs'}
        onClick={() => onItemClick('mySongs')}
      />
      <SideBarItem
        navSize={navSize}
        title="Payments"
        icon={MdAttachMoney}
        active={selectedItem === 'payments'}
        onClick={() => onItemClick('payments')}
      />
      <SideBarItem
        navSize={navSize}
        title="Settings"
        icon={CgProfile}
        active={selectedItem === 'settings'}
        onClick={() => onItemClick('settings')}
      />
      <SideBarHoverBox
        title="Dashboard"
        icon={FiHome}
        description="Dashboard"
      />
      <SideBarHoverBox
        title="My Songs"
        icon={MdLibraryMusic}
        description="Your song library"
      />
      <SideBarHoverBox
        title="Payments"
        icon={MdAttachMoney}
        description="Your payment settings"
      />
      <SideBarHoverBox
        title="Profile"
        icon={CgProfile}
        description="Your profile settings"
      />
      <div className={styles.profileInfo}>
        <img
          src={user.avatar}
          alt={user.username}
          className={styles.profileAvatar}
        />
        <div className={styles.profileDetails}>
          <h3 className={styles.profileName}>{user.username}</h3>
          <p className={styles.profileEmail}>{user.email}</p>
        </div>
      </div>
    </div>
  );
};
