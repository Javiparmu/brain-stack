import React, { FC } from 'react';
import { IconType } from 'react-icons/lib';
import styles from '@/styles/Profile.module.css';

interface SideBarHoverBoxProps {
  title: string;
  icon: IconType;
  description: string;
}

export const SideBarHoverBox: FC<SideBarHoverBoxProps> = ({
  title,
  icon,
  description,
}) => {
  return (
    <div className={styles.hoverBoxContainer}>
      <div className={styles.hoverBoxArrow}></div>
      <div className={styles.hoverBoxContent}>
        {React.createElement(icon, { className: styles.hoverBoxIcon })}
        <h2 className={styles.hoverBoxTitle}>{title}</h2>
        <p className={styles.hoverBoxDescription}>{description}</p>
      </div>
    </div>
  );
};
