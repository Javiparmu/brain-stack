import Image from 'next/image';
import { FC } from 'react';
import styles from '@/app/styles/Dashboard.module.css';
import Link from 'next/link';
import { DownloadIcon } from '../icons';

interface ImageListProps {
  images: string[];
  size: number;
}

const ImageList: FC<ImageListProps> = ({ images, size }) => {
  return (
    <>
      {images.map((image, index) => (
        <div key={image + index} className={styles.imageCard}>
          <Image style={{ borderRadius: '5px' }} width={size} height={size} src={image} alt="generated-image" />
          <Link href={image} className={styles.downloadButton}>
            <DownloadIcon size={25} color="#eaeaea" />
          </Link>
        </div>
      ))}
    </>
  );
};

export default ImageList;
