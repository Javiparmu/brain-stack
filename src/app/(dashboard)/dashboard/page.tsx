'use client';

import '@/styles/globals.css';
import styles from '@/styles/SongGenerator.module.css';
import { FC, useState } from 'react';
import { SongUpload } from '@/components';
import ModelList from '@/components/songGenerator/ModelList';
import { FaSearch } from 'react-icons/fa';

const SongGeneratorPage: FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <div className={styles.songGenerator}>
      <h1 className={styles.header}>Upload the voice</h1>
      <SongUpload />
      <h2 className={styles.subheader}>Select a model</h2>
      <div className={styles.inputGroup}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <ModelList searchText={searchText} />
    </div>
  );
};

export default SongGeneratorPage;
