import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  onIntersect?(): void;
}

interface HookReturnType {
  targetRef: MutableRefObject<HTMLDivElement | null>;
  entry?: IntersectionObserverEntry;
}

// determine default values for Observers options value
export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  onIntersect,
}: Options = {}): HookReturnType {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  // ref must be hanging on an element that'll be monitored
  const targetRef = useRef<HTMLDivElement | null>(null);

  const callbackFn = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      onIntersect?.();
    }

    setEntry(entry);
  };

  useEffect(() => {
    const currentRef = targetRef.current;

    // checking - if a tracked element exists then could add up the subscription
    if (!currentRef) return;

    const obs = new IntersectionObserver(callbackFn, { threshold, root, rootMargin });

    obs.observe(currentRef);

    return () => {
      obs.disconnect();
    };
  }, [threshold, root, rootMargin, onIntersect]);

  return { targetRef, entry };
}
