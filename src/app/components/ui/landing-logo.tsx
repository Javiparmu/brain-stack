'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/styles/Ui.module.css';
import logo from '@/app/assets/images/logo_bs.png';

interface LandingLogoProps {
  className?: string;
}

const LandingLogo = ({ className }: LandingLogoProps) => {
  return (
    <Link href="/" className={styles.logo}>
      <Image className={className} width={50} height={50} src={logo} alt="logo" />
      <span className={styles.logoText}>Brain Stack</span>
    </Link>
  );
};

export default LandingLogo;
