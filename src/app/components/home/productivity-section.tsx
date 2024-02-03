import styles from '@/app/styles/home/Productivity.module.css';

const ProductivitySection = () => {
  return (
    <div>
      <div className={styles.boostTextContainer}>
        <h2 className={styles.boostTitle}>
          Boost your productivity.
          <br />
          Start using our app today.
        </h2>
        <p className={styles.boostSubtitle}>Unlock new levels of efficiency with AI-Powered tools.</p>
        <div className={styles.buttonContainer}>
          <svg width={50} height={50} viewBox="0 0 1000 1000" fill="var(--foreground)">
            <g>
              <polygon points="1000,427.6 1000,540.6 603.4,540.6 603.4,1000 477,1000 477,427.6 	"></polygon>
              <polygon points="1000,213.8 1000,327 364.8,327 364.8,1000 238.4,1000 238.4,213.8 	"></polygon>
              <polygon points="1000,0 1000,113.2 126.4,113.2 126.4,1000 0,1000 0,0 	"></polygon>
            </g>
          </svg>
          <svg width={50} height={50} viewBox="0 0 2406 2406">
            <path
              d="M1 578.4C1 259.5 259.5 1 578.4 1h1249.1c319 0 577.5 258.5 577.5 577.4V2406H578.4C259.5 2406 1 2147.5 1 1828.6V578.4z"
              fill="#74aa9c"
            />
            <path
              id="a"
              d="M1107.3 299.1c-197.999 0-373.9 127.3-435.2 315.3L650 743.5v427.9c0 21.4 11 40.4 29.4 51.4l344.5 198.515V833.3h.1v-27.9L1372.7 604c33.715-19.52 70.44-32.857 108.47-39.828L1447.6 450.3C1361 353.5 1237.1 298.5 1107.3 299.1zm0 117.5-.6.6c79.699 0 156.3 27.5 217.6 78.4-2.5 1.2-7.4 4.3-11 6.1L952.8 709.3c-18.4 10.4-29.4 30-29.4 51.4V1248l-155.1-89.4V755.8c-.1-187.099 151.601-338.9 339-339.2z"
              fill="#fff"
            />
            <use xlinkHref="#a" transform="rotate(60 1203 1203)" />
            <use xlinkHref="#a" transform="rotate(120 1203 1203)" />
            <use xlinkHref="#a" transform="rotate(180 1203 1203)" />
            <use xlinkHref="#a" transform="rotate(240 1203 1203)" />
            <use xlinkHref="#a" transform="rotate(300 1203 1203)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductivitySection;
