import { useEffect, useLayoutEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export const useMediaQuery = (query: string | string[]): boolean[] => {
  const queries = Array.isArray(query) ? query : [query];
  const isSupported = isBrowser && "matchMedia" in window;

  const [matches, setMatches] = useState(
    queries.map((query) => (isSupported ? !!window.matchMedia(query).matches : false))
  );

  useSafeLayoutEffect(() => {
    if (!isSupported) return;

    const mediaQueryList = queries.map((query) => window.matchMedia(query));

    const listenerList = mediaQueryList.map((mediaQuery, index) => {
      const listener = () =>
        setMatches((prev) => prev.map((prevValue, idx) => (index === idx ? !!mediaQuery.matches : prevValue)));

      mediaQuery.addListener(listener);

      return listener;
    });

    return () => {
      mediaQueryList.forEach((mediaQuery, index) => {
        mediaQuery.removeListener(listenerList[index]);
      });
    };
  }, [query]);

  return matches;
};
