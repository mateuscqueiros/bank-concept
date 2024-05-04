import { MutableRefObject, useEffect } from 'react';

export function useClickOutside(ref: MutableRefObject<any>, onClickOutside: () => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

