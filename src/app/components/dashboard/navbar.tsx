'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import AvatarButton from '../ui/avatar-button';
import styles from '@/app/styles/Dashboard.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useSidebar } from '@/app/store/use-sidebar';

const Navbar: FC = () => {
  const { onOpen: openSidebar } = useSidebar();

  return (
    <nav className={styles.navbar}>
      <RxHamburgerMenu onClick={openSidebar} size={30} color="#eaeaea" className={styles.hamburger} />
      <Link href="/" className={styles.logo}>
        <Image width={30} height={30} src="/images/logo_blue.png" alt="logo" />
        <span className={styles.logoText}>Brain Stack</span>
      </Link>
      <div className={styles.navItems}>
        <AvatarButton isDashboard />
      </div>
    </nav>
  );
};

export default Navbar;
