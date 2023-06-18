import styles from '@/styles/SongGenerator.module.css';
import { FC, useState } from 'react';
import { modelList } from '@/utils';
import { FaStar } from 'react-icons/fa';

const ModelList: FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('');

  const onModelClick = (model: string) => {
    setSelectedModel(model);
  };

  return (
    <div className={styles.modelGrid}>
      {modelList.map((model) => (
        <div
          key={model.artist}
          className={`${styles.modelCard} ${
            selectedModel === model.artist ? styles.selected : ''
          }`}
          onClick={() => onModelClick(model.artist)}
        >
          <div className={styles.modelInfo}>
            <img
              src={model.image}
              alt={model.artist}
              className={styles.modelImage}
            />
            <p className={styles.modelArtist}>{model.artist}</p>
          </div>
          <div className={styles.modelRating}>
            <p className={styles.modelRate}>{model.rate}</p>
            <span className={styles.starIcon}>
              <FaStar />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModelList;
