'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from '@/styles/Ui.module.css';

const AvatarButton: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles.avatarContainer} onClick={toggleMenu}>
        <FaUserAlt fontSize={40} color="#eaeaea" className={styles.avatar} />
      </div>
      <div className={`${styles.menu} ${showMenu ? styles.show : ''}`}>
        <Link href="/dashboard" className={styles.menuItem}>
          Dashboard
        </Link>
        <Link href="" className={styles.menuItem} onClick={() => signOut()}>
          Logout
        </Link>
      </div>
    </>
  );
};

export default AvatarButton;
