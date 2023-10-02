'use client';

import { FC, useRef, useState, ChangeEvent } from 'react';
import styles from '@/styles/SongGenerator.module.css';
import { FaItunesNote } from 'react-icons/fa';
import { fetchAudioUrl } from '@/utils';

export const SongUpload: FC = () => {
  const [input, setInput] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>('');

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.length) {
      setFile(event?.target?.files[0]);
    }
  };

  const handleClick = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/text-to-audio`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: input, userId: '123' }),
      },
    );

    const { result } = await response.json();

    const url = await fetchAudioUrl(result);

    setAudioUrl(url);
  };

  return (
    <div className={styles.fileUploadContainer}>
      <div className={styles.fileUpload}>
        <FaItunesNote className={styles.fileIcon} />
        {/* <input
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
        /> */}
        <input
          type="text"
          placeholder="Write your input here"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={styles.fileInput}
        />
        <select className={styles.languageSelector}>
          <option value="en-US">🇺🇸 EN</option>
          <option value="es-ES">🇪🇸 ES</option>
        </select>
      </div>
      {audioUrl !== '' && (
        <audio
          controls
          src={audioUrl}
          style={{ marginTop: '1rem', marginBottom: '1rem' }}
        />
      )}
      <button onClick={handleClick} className={styles.generateButton}>
        Generate
      </button>
    </div>
  );
};
