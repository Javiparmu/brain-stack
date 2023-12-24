import { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Home.module.css';

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
}

export const SocialButton: FC<SocialButtonProps> = ({ children, label, href }) => {
  return (
    <Link href={href}>
      <label className={styles.footerButton} aria-label={label}>
        {children}
      </label>
    </Link>
  );
};
