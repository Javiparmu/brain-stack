import React, { FC } from 'react';
import { IconType } from 'react-icons/lib';
import styles from '@/styles/Profile.module.css'; // Import CSS

interface SideBarItemProps {
  icon: IconType;
  title: string;
  active?: boolean;
  navSize: string;
  onClick?: () => void;
}

export const SideBarItem: FC<SideBarItemProps> = ({
  icon,
  title,
  active = false,
  navSize,
  onClick,
}) => {
  return (
    <div
      className={`${styles.sidebarItem} ${
        active ? styles.active : ''
      } ${navSize}`}
      onClick={onClick}
    >
      {React.createElement(icon, {
        className: `${styles.sidebarIcon} ${active ? styles.activeIcon : ''}`,
      })}
      {navSize === 'large' && (
        <span
          className={`${styles.sidebarText} ${active ? styles.activeText : ''}`}
        >
          {title}
        </span>
      )}
    </div>
  );
};
