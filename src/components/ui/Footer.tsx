import styles from '@/styles/Home.module.css';
import React, { FC } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SocialButton } from './SocialButton';

export const Footer: FC = () => {
  return (
    <footer className={styles.footerHome}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          © 2023 Music AI. All rights reserved
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
