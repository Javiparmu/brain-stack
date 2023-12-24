'use client';

import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from '@/app/styles/Ui.module.css';
import { Session } from 'next-auth';

interface HamburgerMenuProps {
  session: Session | null;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ session }) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <>
      <button className={styles.hamburgerButton} onClick={toggleHamburgerMenu}>
        <FaBars />
      </button>
      {showHamburgerMenu && (
        <div className={styles.hamburgerMenu}>
          {session ? (
            <>
              <Link href="" className={styles.menuItem} onClick={() => signOut()}>
                Logout
              </Link>
              <Link href="/profile" className={styles.menuItem}>
                Profile
              </Link>
            </>
          ) : (
            <button onClick={() => signIn()} className={styles.menuItem}>
              Get started
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
