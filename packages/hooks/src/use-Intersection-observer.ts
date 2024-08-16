import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  onIntersect?(): void;
}

interface HookReturnType {
  targetRef: MutableRefObject<HTMLElement | null>;
  entry?: IntersectionObserverEntry;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  onIntersect,
}: Options = {}): HookReturnType {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const targetRef = useRef<HTMLElement | null>(null);

  const callbackFn = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      onIntersect?.();
    }

    setEntry(entry);
  };

  useEffect(() => {
    const currentRef = targetRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(callbackFn, { threshold, root, rootMargin });

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, onIntersect]);

  return { targetRef, entry };
}
