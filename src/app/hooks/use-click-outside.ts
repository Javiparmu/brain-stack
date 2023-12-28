import { Ref, RefObject, useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement = HTMLDivElement>(
  isOpen: boolean,
  handler: () => void,
  omitElement?: RefObject<T>,
): Ref<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const listener = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (omitElement?.current && omitElement.current?.contains(event.target as Node)) {
          return;
        }

        handler();
      }
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler, omitElement, isOpen]);

  return ref;
};
