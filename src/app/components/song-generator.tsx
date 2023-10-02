'use client';

import styles from '@/styles/SongGenerator.module.css';
import { FC, useState } from 'react';
import { SongUpload } from '@/app/components';
import ModelList from '@/app/components/songGenerator/ModelList';
import { FaSearch } from 'react-icons/fa';

const SongGeneratorPage: FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <main className={styles.songGenerator}>
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
    </main>
  );
};

export default SongGeneratorPage;
