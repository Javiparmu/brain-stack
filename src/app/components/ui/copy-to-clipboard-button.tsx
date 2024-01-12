import { MouseEvent, RefObject, useState } from 'react';
import { FaCheck, FaRegCopy } from 'react-icons/fa6';
import styles from '@/app/styles/Dashboard.module.css';

interface CopyToClipboardButtonProps {
  textRef?: RefObject<HTMLPreElement>;
}

const CopyToClipboardButton = ({ textRef }: CopyToClipboardButtonProps) => {
  const [textCopied, setTextCopied] = useState(false);

  const copyToClipboard = (event: MouseEvent<SVGElement>) => {
    const text = (textRef ? textRef.current?.innerText : event.currentTarget.parentElement?.innerText) ?? '';

    navigator.clipboard.writeText(text).then(() => {
      setTextCopied(true);
      setTimeout(() => {
        setTextCopied(false);
      }, 2000);
    });
  };

  return (
    <>
      <span className={styles.copyText}>{textCopied ? 'Copied!' : ''}</span>
      {textCopied ? (
        <FaCheck className={styles.copyIcon} />
      ) : (
        <FaRegCopy onClick={copyToClipboard} className={`${styles.copyIcon} ${styles.clipboard}`} />
      )}
    </>
  );
};

export default CopyToClipboardButton;
