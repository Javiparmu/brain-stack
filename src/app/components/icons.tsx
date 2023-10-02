import { FC } from 'react';

interface IconProps {
  styles?: string;
  size?: number | string;
  color?: string;
}

export const ConversationIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-message`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 9h8"></path>
      <path d="M8 13h6"></path>
      <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
    </svg>
  );
};

export const DashboardIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-layout-dashboard`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4h6v8h-6z"></path>
      <path d="M4 16h6v4h-6z"></path>
      <path d="M14 12h6v8h-6z"></path>
      <path d="M14 4h6v4h-6z"></path>
    </svg>
  );
};

export const MusicIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-music`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      <path d="M9 17v-13h10v13"></path>
      <path d="M9 8h10"></path>
    </svg>
  );
};

export const CodeIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-code`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 8l-4 4l4 4"></path>
      <path d="M17 8l4 4l-4 4"></path>
      <path d="M14 4l-4 16"></path>
    </svg>
  );
};

export const ImageIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-photo`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M15 8h.01"></path>
      <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
      <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
      <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
    </svg>
  );
};

export const VideoIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-video`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
      <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
    </svg>
  );
};

export const ChevronRightIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-chevron-right`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 6l6 6l-6 6"></path>
    </svg>
  );
};

export const SendIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      style={{ transform: 'rotate(90deg)' }}
      className={`${styles} icon icon-tabler icon-tabler-send`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
    </svg>
  );
};

export const DownloadIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-download`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
      <path d="M7 11l5 5l5 -5"></path>
      <path d="M12 4l0 12"></path>
    </svg>
  );
};

export const RobotIcon: FC<IconProps> = ({
  styles,
  size = '24px',
  color = 'black',
}) => {
  return (
    <svg
      className={`${styles} icon icon-tabler icon-tabler-robot`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
      <path d="M10 16h4"></path>
      <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
      <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
      <path d="M9 7l-1 -4"></path>
      <path d="M15 7l1 -4"></path>
    </svg>
  );
};