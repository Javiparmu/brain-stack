'use client';

import styles from '@/app/styles/Ui.module.css';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AvatarButton from './avatar-button';
import { MdArrowForwardIos } from 'react-icons/md';
import { Session } from 'next-auth';
import logo from '@/app/assets/images/logo_bs.png';

interface NavbarProps {
  session: Session | null;
}

const Navbar: FC<NavbarProps> = ({ session }) => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image width={50} height={50} sizes="5vw" src={logo} alt="logo" />
        <span className={styles.logoText}>Brain Stack</span>
      </Link>
      <div className={styles.navItems}>
        {session ? (
          <AvatarButton />
        ) : (
          <Link href="/auth/signup" className={styles.getStarted}>
            <span>Get Started</span>
            <MdArrowForwardIos size={15} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
