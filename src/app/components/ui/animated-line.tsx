import React, { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '@/styles/Home.module.css'; // Asegúrate de crear este archivo CSS.

interface Props {
  direction: 'horizontal' | 'vertical';
  startPosition: number;
  onComplete: () => void;
}

const AnimatedLine: FC<Props> = ({ direction, startPosition, onComplete }) => {
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => onComplete(),
    });

    if (lineRef.current) {
      timeline.fromTo(
        lineRef.current,
        { [direction === 'horizontal' ? 'x' : 'y']: startPosition },
        {
          [direction === 'horizontal' ? 'x' : 'y']:
            direction === 'horizontal'
              ? window.innerWidth - 200
              : window.innerHeight - 200,
          duration: Math.random() * 5 + 5, // Duración aleatoria entre 5 y 10 segundos
          ease: 'linear',
        },
      );
    }

    return () => {
      timeline.kill(); // Limpiar la timeline al desmontar
    };
  }, [direction, startPosition, onComplete]);

  return <div ref={lineRef} className={styles.line}></div>;
};

export default AnimatedLine;
