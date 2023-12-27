import React, { FC } from 'react';
import styles from '@/app/styles/Dashboard.module.css';

interface ImageAmountSelectProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ImageAmountSelect: FC<ImageAmountSelectProps> = ({ value, onChange }) => {
  return (
    <select
      name="number-of-images"
      id="number-of-images"
      className={styles.numberSelect}
      onChange={onChange}
      value={value}
    >
      <option value="1">1 Image</option>
      <option value="2">2 Images</option>
      <option value="3">3 Images</option>
      <option value="4">4 Images</option>
    </select>
  );
};

export default ImageAmountSelect;
