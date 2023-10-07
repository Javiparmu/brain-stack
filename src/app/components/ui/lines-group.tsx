'use client';

import React, { FC, useEffect, useState } from 'react';
import AnimatedLine from './animated-line';

const LinesGroup: FC = () => {
  const [lines, setLines] = useState<number[]>([]);

  const addLine = () => {
    setLines((prevLines) => [...prevLines, Date.now()]);
  };

  const removeLine = (id: number) => {
    setLines((prevLines) => prevLines.filter((line) => line !== id));
  };

  useEffect(() => {
    const intervalId = setInterval(addLine, Math.random() * 5000 + 5000); // Intervalo aleatorio entre 5 y 10 segundos

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {lines.map((id) => (
        <AnimatedLine
          key={id}
          direction={Math.random() > 0.5 ? 'horizontal' : 'vertical'}
          startPosition={
            71 *
            Math.floor(
              (Math.random() *
                (Math.random() > 0.5
                  ? window.innerWidth
                  : window.innerHeight)) /
                71,
            )
          }
          onComplete={() => removeLine(id)}
        />
      ))}
    </div>
  );
};

export default LinesGroup;
