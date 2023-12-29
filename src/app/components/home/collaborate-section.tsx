import React, { FC } from 'react';
import styles from '@/app/styles/home/Collaborate.module.css';
import { GithubIcon } from '../icons';
import Link from 'next/link';

const CollaborateSection: FC = () => {
  return (
    <section className={styles.collaborateContainer}>
      <h1 className={styles.collaborateHeader}>Collaborate with us</h1>
      <div className={styles.collaborateContent}>
        <p className={styles.collaborateText}>
          This is an open-source project. We warmly invite you to collaborate with us. Discover the project on GitHub
          and become a part of our collaborative community.
        </p>
        <Link
          title="Github repository"
          className={styles.collaborateButton}
          href="https://github.com/Javiparmu/brain-stack"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size="100" />
        </Link>
      </div>
    </section>
  );
};

export default CollaborateSection;
