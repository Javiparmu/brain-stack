import styles from '@/styles/SongGenerator.module.css';
import { FC } from 'react';
import { MainLayout, SongUpload } from '@/components';
import ModelList from '@/components/songGenerator/ModelList';
import { FaSearch } from 'react-icons/fa';

const SongGeneratorPage: FC = () => {
  return (
    <MainLayout>
      <div className={styles.songGenerator}>
        <h1 className={styles.header}>Upload the voice</h1>
        <SongUpload />
        <h2 className={styles.subheader}>Select a model</h2>
        <div className={styles.inputGroup}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <ModelList />
      </div>
    </MainLayout>
  );
};

export default SongGeneratorPage;
