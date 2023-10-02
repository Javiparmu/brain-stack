import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/Ui.module.css';

interface AvatarIconProps {
  img?: string;
  role?: string;
}

const AvatarIcon: FC<AvatarIconProps> = ({ img, role }) => {
  const userImage = img ?? '/images/no-user.png';

  return (
    <Image
      className={styles.avatarIcon}
      src={role === 'user' ? userImage : '/images/bot-avatar.png'}
      alt="Avatar"
      width={30}
      height={30}
    />
  );
};

export default AvatarIcon;
