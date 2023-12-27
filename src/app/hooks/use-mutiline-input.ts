import { KeyboardEvent, RefObject, useEffect, useRef, useState } from 'react';

interface UseMultilineInputOptions {
  onEnter?: (value: string) => void;
}

interface UseMultilineInputWithoutEnter {
  inputRef: RefObject<HTMLTextAreaElement>;
  hasText: boolean;
  handleInput: () => void;
}

interface UseMultilineInputWithEnter extends UseMultilineInputWithoutEnter {
  handleEnter: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}

type UseMultilineInput = UseMultilineInputWithEnter | UseMultilineInputWithoutEnter;

export function useMultilineInput(options: { onEnter: (value: string) => void }): UseMultilineInputWithEnter;
export function useMultilineInput(options?: UseMultilineInputOptions): UseMultilineInputWithoutEnter;

export function useMultilineInput({ onEnter }: UseMultilineInputOptions = {}): UseMultilineInput {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [hasText, setHasText] = useState(false);

  const handleInput = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;

      setHasText(inputRef.current.value.trim() !== '');
    }
  };

  const handleEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!onEnter) return;

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (inputRef.current?.value !== '') {
        onEnter(inputRef.current?.value || '');
      }
    }
  };

  useEffect(() => {
    handleInput();
  }, []);

  if (onEnter) {
    return {
      inputRef,
      hasText,
      handleInput,
      handleEnter,
    };
  }

  return {
    inputRef,
    hasText,
    handleInput,
  };
}
