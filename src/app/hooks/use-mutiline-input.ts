import { KeyboardEvent, RefObject, useEffect, useRef, useState } from 'react';

interface UseMultiLineInputOptions {
  onEnter?: (value: string) => void;
}

interface UseMultiLineInputWithoutEnter {
  inputRef: RefObject<HTMLTextAreaElement>;
  hasText: boolean;
  handleInput: () => void;
}

interface UseMultiLineInputWithEnter extends UseMultiLineInputWithoutEnter {
  handleEnter: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}

type UseMultiLineInput = UseMultiLineInputWithEnter | UseMultiLineInputWithoutEnter;

export function useMultiLineInput(options: { onEnter: (value: string) => void }): UseMultiLineInputWithEnter;
export function useMultiLineInput(options?: UseMultiLineInputOptions): UseMultiLineInputWithoutEnter;

export function useMultiLineInput({ onEnter }: UseMultiLineInputOptions = {}): UseMultiLineInput {
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
