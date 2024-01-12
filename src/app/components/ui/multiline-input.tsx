import { ChangeEvent } from 'react';
import styles from '@/app/styles/Dashboard.module.css';
import { useMultilineInput } from '@/app/hooks/use-mutiline-input';
import LoadingDots from './loading-dots';
import SendButton from '../dashboard/send-button';

interface MultilineInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  loading: boolean;
  placeholder: string;
}

const MultilineInput = ({ value, onChange, onSubmit, loading, placeholder }: MultilineInputProps) => {
  const { inputRef, hasText, handleInput, handleEnter } = useMultilineInput({
    onEnter: onSubmit,
  });

  return (
    <section className={styles.inputContainer}>
      <textarea
        ref={inputRef}
        spellCheck={false}
        onKeyDown={handleEnter}
        onInput={handleInput}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        rows={1}
        className={styles.conversationInput}
      />
      {loading ? <LoadingDots /> : <SendButton disabled={!hasText} onClick={onSubmit} />}
    </section>
  );
};

export default MultilineInput;
