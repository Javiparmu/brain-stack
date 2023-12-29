'use client';

import styles from '@/app/styles/Ui.module.css';
import React, { FC } from 'react';
import Link from 'next/link';
import AvatarButton from './avatar-button';
import { MdArrowForwardIos } from 'react-icons/md';
import { Session } from 'next-auth';
import LandingLogo from './landing-logo';

interface NavbarProps {
  session: Session | null;
}

const Navbar: FC<NavbarProps> = ({ session }) => {
  return (
    <nav className={styles.navbar}>
      <LandingLogo />
      <div className={styles.navItems}>
        {session ? (
          <AvatarButton />
        ) : (
          <Link href="/auth/signin" className={styles.getStarted}>
            <span>Get Started</span>
            <MdArrowForwardIos size={15} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
