import React, { FC } from 'react';
import styles from '@/styles/Home.module.css';
import { GithubIcon } from '../icons';

const CollaborateSection: FC = () => {
  return (
    <section className={styles.collaborateContainer}>
      <h1 className={styles.collaborateHeader}>Collaborate with us</h1>
      <div className={styles.collaborateContent}>
        <p className={styles.collaborateText}>
          This is an open-source project. We warmly invite you to collaborate
          with us. Discover the project on GitHub and become a part of our
          collaborative community.
        </p>
        <a
          className={styles.collaborateButton}
          href="https://github.com/Javiparmu/musicai-web"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size="100px" />
        </a>
      </div>
      {/* <div className={styles.collaborateEmail}>
        <input type="text" className={styles.collaborateInput} />
        <button className={styles.collaborateSubmit}>Send</button>
      </div> */}
    </section>
  );
};

export default CollaborateSection;
