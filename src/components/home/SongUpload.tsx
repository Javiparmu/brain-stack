import { FC, useRef, useState, ChangeEvent } from 'react';
import styles from '@/styles/SongGenerator.module.css';
import { FaItunesNote } from 'react-icons/fa';

export const SongUpload: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.length) {
      setFile(event?.target?.files[0]);
    }
  };

  const handleClick = () => {
    console.log('generate');
  };

  return (
    <div className={styles.fileUploadContainer}>
      <div className={styles.fileUpload}>
        <FaItunesNote className={styles.fileIcon} />
        <input
          ref={inputRef}
          type="file"
          onChange={onFileChange}
          accept="audio/*"
          id="fileInput"
          style={{ display: 'none' }}
        />
        <input
          type="text"
          readOnly
          placeholder="Upload the voice"
          onClick={() => inputRef?.current?.click()}
          value={file?.name || ''}
          className={styles.fileInput}
        />
      </div>
      <button onClick={handleClick} className={styles.generateButton}>
        Generate
      </button>
    </div>
  );
};
