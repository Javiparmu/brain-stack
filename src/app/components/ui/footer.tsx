import styles from '@/styles/Home.module.css';
import React, { FC } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialButton } from './social-button';

export const Footer: FC = () => {
  return (
    <footer className={styles.footerHome}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          © 2023 Brain Stack. All rights reserved
        </p>
        <div className={styles.socialContainer}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram fontSize={20} />
          </SocialButton>
        </div>
      </div>
    </footer>
  );
};
