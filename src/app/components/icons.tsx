interface IconProps {
  styles?: string;
  size?: number | string;
  color?: string;
}

export const ConversationIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const DashboardIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const MusicIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const CodeIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const ImageIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const VideoIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const ChevronRightIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const SendIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
  return (
    <svg
      style={{ transform: 'rotate(90deg)' }}
      className={`${styles} icon icon-tabler icon-tabler-send`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      strokeWidth="2"
      fill={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
    </svg>
  );
};

export const DownloadIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const RobotIcon = ({ styles, size = '24px', color = 'black' }: IconProps) => {
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

export const GithubIcon = ({ styles, size = '24', color = 'black' }: IconProps) => (
  <svg className={styles} width={size} height={size} color={color} viewBox={`0 0 ${size} ${size}`}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      fill="#fff"
    />
  </svg>
);
