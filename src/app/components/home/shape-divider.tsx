import styles from '@/app/styles/home/Showcase.module.css';

const ShapeDivider = ({ position }: { position: 'top' | 'bottom' }) => {
  return (
    <div style={{ [position]: 0, transform: position === 'bottom' ? 'rotate(180deg)' : '' }} className={styles.shapeDivider}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={styles.shapeFill}></path>
      </svg>
    </div>
  );
};

export default ShapeDivider;
