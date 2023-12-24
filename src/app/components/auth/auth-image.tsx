import Image from 'next/image';
import styles from '@/app/styles/Auth.module.css';
import React, { FC } from 'react';

export const AuthImage: FC = () => {
  return (
    <div className={styles.authImage}>
      <Image src="/images/login_image.jpg" alt="signUp image" width={400} height={400} style={{ objectFit: 'cover' }} />
    </div>
  );
};
