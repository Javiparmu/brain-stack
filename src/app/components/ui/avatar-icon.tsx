import Image from 'next/image';
import styles from '@/app/styles/Ui.module.css';

interface AvatarIconProps {
  img?: string;
  role?: string;
  className?: string;
}

const AvatarIcon = ({ img, role, className }: AvatarIconProps) => {
  const userImage = img ?? '/images/no-user.png';

  return (
    <Image
      className={className ?? styles.avatarIcon}
      src={role === 'user' ? userImage : '/images/bot-avatar.png'}
      alt="Avatar"
      width={30}
      height={30}
    />
  );
};

export default AvatarIcon;
