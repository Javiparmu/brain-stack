'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from '@/app/styles/Ui.module.css';
import { useSubscriptionModal } from '@/app/store/use-subscription-modal';
import { useClickOutside } from '@/app/hooks/use-click-outside';

interface AvatarButtonProps {
  isDashboard?: boolean;
}

const AvatarButton: FC<AvatarButtonProps> = ({ isDashboard = false }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { onOpen } = useSubscriptionModal();
  const menuRef = useClickOutside(() => setShowMenu(false));

  const handleOpenUpgradeModal = () => {
    setShowMenu(false);
    onOpen();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles.avatarContainer} onClick={toggleMenu}>
        <FaUserAlt color="#eaeaea" className={styles.avatar} />
      </div>
      {showMenu && (
        <div ref={menuRef} className={styles.menu}>
          {!isDashboard ? (
            <Link href="/dashboard" className={styles.menuItem}>
              Dashboard
            </Link>
          ) : (
            <button onClick={handleOpenUpgradeModal} className={styles.upgradeMenuItem}>
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
