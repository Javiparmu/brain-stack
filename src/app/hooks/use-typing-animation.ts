import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  loop?: boolean;
  delayBeforeRestart?: number;
}

export const useTypingAnimation = ({ text, speed = 50, loop = true, delayBeforeRestart = 2000 }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayedText.length < text.length) {
        interval = setInterval(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
          setDisplayedText('');
        }, delayBeforeRestart);
      }
    } else if (loop) {
      setTyping(true);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [displayedText, text, speed, delayBeforeRestart, loop, typing]);

  return displayedText;
};
