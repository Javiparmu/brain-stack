import { useState, useEffect } from 'react';

const MOBILE_WIDTH_THRESHOLD = 560;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= MOBILE_WIDTH_THRESHOLD);
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return isMobile;
};
