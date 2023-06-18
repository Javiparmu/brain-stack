import styles from '@/styles/Home.module.css';
import { masonryItems } from '@/utils/constants';
import React, { FC } from 'react';
import { AudioPlayer } from './AudioPlayer';
import Image from 'next/image';

export const MasonrySongs: FC = () => {
  return (
    <div className={styles.masonrySongs}>
      {masonryItems.map(({ id, image, song }) => (
        <div className={styles.masonryItem} key={id}>
          <Image
            className={styles.masonryImage}
            width={420}
            height={420}
            src={image}
            alt="song image"
            style={{
              objectFit: 'cover',
            }}
          />
          <AudioPlayer song={song} />
        </div>
      ))}
    </div>
  );
};
