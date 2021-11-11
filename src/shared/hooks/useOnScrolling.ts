/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from "react";

export const useOnScrolling = (offset = 0) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollingElement = (): Element => {
      const browser = window.navigator.userAgent.toLowerCase();
      if ("scrollingElement" in document) return document.scrollingElement;
      if (browser.indexOf("webkit") > 0) return document.body;
      return document.documentElement;
    };

    const onScroll = () => {
      const scrollY = scrollingElement().scrollTop;
      if (scrollY <= offset) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    // debounce
    let timeoutId: ReturnType<typeof setTimeout>;
    const onScrollDebounce = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(onScroll, 100);
    };

    document.addEventListener("scroll", onScrollDebounce, { passive: true });
    return () => {
      document.removeEventListener("scroll", onScrollDebounce);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [offset]);

  return scrolled;
};
