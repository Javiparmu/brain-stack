import styles from '@/styles/Ui.module.css';
import React, { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
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
          width={200}
          height={65}
          src="/images/music_ai_logo.png"
          alt="logo"
          className={styles.logo}
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
              <Image
                width={40}
                height={40}
                src={user.avatar ?? '/images/no-user.png'}
                alt="Avatar"
                className={styles.avatar}
              />
            </div>
            {showMenu && (
              <div className={styles.menu}>
                <Link href="" className={styles.menuItem} onClick={onLogout}>
                  Logout
                </Link>
                <Link
                  href="/profile"
                  className={styles.menuItem}
                  onClick={() => push('/profile')}
                >
                  Profile
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <button
              className={styles.authButton}
              onClick={() => push('/login')}
            >
              Sign In
            </button>
            <button
              className={styles.authButton}
              onClick={() => push('/sign-up')}
            >
              Sign Up
            </button>
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
                <Link
                  href="/profile"
                  className={styles.menuItem}
                  onClick={() => push('/profile')}
                >
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
