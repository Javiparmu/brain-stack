import { ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Home.module.css';

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
}

export const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <Link href={href}>
      <label className={styles.footerButton} aria-label={label}>
        {children}
      </label>
    </Link>
  );
};
