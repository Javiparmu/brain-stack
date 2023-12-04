'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from '@/styles/Ui.module.css';
import { useSubscriptionModal } from '@/store/use-subscription-modal';

interface AvatarButtonProps {
  isDashboard?: boolean;
}

const AvatarButton: FC<AvatarButtonProps> = ({ isDashboard = false }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { onOpen } = useSubscriptionModal();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles.avatarContainer} onClick={toggleMenu}>
        <FaUserAlt fontSize={40} color="#eaeaea" className={styles.avatar} />
      </div>
      {showMenu && (
        <div className={styles.menu}>
          {!isDashboard ? (
            <Link href="/dashboard" className={styles.menuItem}>
              Dashboard
            </Link>
          ) : (
            <button onClick={onOpen} className={styles.upgradeMenuItem}>
              Upgrade
            </button>
          )}
          <Link href="" className={styles.menuItem} onClick={() => signOut()}>
            Logout
          </Link>
        </div>
      )}
    </>
  );
};

export default AvatarButton;
