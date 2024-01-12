'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from '@/app/styles/Ui.module.css';
import { useSubscriptionModal } from '@/app/store/use-subscription-modal';
import { useClickOutside } from '@/app/hooks/use-click-outside';

interface AvatarButtonProps {
  isDashboard?: boolean;
}

const AvatarButton = ({ isDashboard = false }: AvatarButtonProps) => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const { onOpen } = useSubscriptionModal();
  const menuRef = useClickOutside(showMenu, () => setShowMenu(false), avatarRef);

  const handleOpenUpgradeModal = () => {
    setShowMenu(false);
    onOpen();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div ref={avatarRef} className={styles.avatarContainer} onClick={toggleMenu}>
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
