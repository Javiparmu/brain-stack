import React, { FC } from 'react';
import styles from '@/app/styles/Dashboard.module.css';

interface ResolutionSelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ResolutionSelect: FC<ResolutionSelectProps> = ({ value, onChange }) => {
  return (
    <select name="image-size" id="image-size" className={styles.imageSizeSelect} onChange={onChange} value={value}>
      <option value="256x256">256x256</option>
      <option value="512x512">512x512</option>
      <option value="1024x1024">1024x1024</option>
    </select>
  );
};

export default ResolutionSelect;
