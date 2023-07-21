'use client';

import styles from '@/styles/Ui.module.css';
import React, { FC, useState } from 'react';
import { FaBars, FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const { push } = useRouter();

  const { user, logoutUser } = useAuthStore();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const onLogout = () => {
    logoutUser();

    push('/');
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          width={256}
          height={79}
          src="/images/music_ai_logo.png"
          alt="logo"
        />
      </Link>
      <div className={styles.navItems}>
        <div className={styles.links}>
          <Link href="/how-it-works" className={styles.link}>
            How it works
          </Link>
          <Link href="/pricing" className={styles.link}>
            Pricing
          </Link>
        </div>
        {user ? (
          <>
            <div className={styles.avatarContainer} onClick={toggleMenu}>
              <FaUserAlt
                fontSize={35}
                color="#676bb9"
                className={styles.avatar}
              />
            </div>
            {showMenu && (
              <div className={styles.menu}>
                <Link href="" className={styles.menuItem} onClick={onLogout}>
                  Logout
                </Link>
                <Link href="/profile" className={styles.menuItem}>
                  Profile
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <Link href="/login" className={styles.link}>
              <button className={styles.authButton}>Sign In</button>
            </Link>
            <Link href="/sign-up" className={styles.link}>
              <button className={styles.authButton}>Sign Up</button>
            </Link>
          </>
        )}
        <button
          className={styles.hamburgerButton}
          onClick={toggleHamburgerMenu}
        >
          <FaBars />
        </button>
        {showHamburgerMenu && (
          <div className={styles.hamburgerMenu}>
            <Link href="/how-it-works" className={styles.menuItem}>
              How it works
            </Link>
            <Link href="/pricing" className={styles.menuItem}>
              Pricing
            </Link>
            {user ? (
              <>
                <Link href="" className={styles.menuItem} onClick={onLogout}>
                  Logout
                </Link>
                <Link href="/profile" className={styles.menuItem}>
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className={styles.menuItem}>
                  Sign In
                </Link>
                <Link href="/sign-up" className={styles.menuItem}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
