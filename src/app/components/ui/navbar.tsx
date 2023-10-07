'use client';

import styles from '@/styles/Ui.module.css';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import AvatarButton from './avatar-button';
import { MdArrowForwardIos } from 'react-icons/md';
import { Session } from 'next-auth';
import logo from '@/assets/images/logo_bs.png';

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
          <button className={styles.getStarted} onClick={() => signIn()}>
            <span>Get Started</span>
            <MdArrowForwardIos size={15} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
