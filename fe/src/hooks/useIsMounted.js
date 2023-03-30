import { useCallback, useRef, useState } from 'react';

export default function useIsMounted() {
  const isMounted = useRef(false);

  useState(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const getIsMounted = useCallback(() => isMounted.current, []);

  return getIsMounted;
}
