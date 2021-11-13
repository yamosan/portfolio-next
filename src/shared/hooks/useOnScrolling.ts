/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { RefObject } from "react";
import { useEffect, useState } from "react";

export const useOnScrolling = (containerRef?: RefObject<HTMLElement>, offset = 0) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const containerElm = containerRef?.current;

    const scrollingElement = (): Element => {
      const browser = window.navigator.userAgent.toLowerCase();
      if ("scrollingElement" in document) return document.scrollingElement;
      if (browser.indexOf("webkit") > 0) return document.body;
      return document.documentElement;
    };

    const onScroll = () => {
      const scrollY = containerElm?.scrollTop || scrollingElement().scrollTop;
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

    const obj = containerElm || document;

    obj.addEventListener("scroll", onScrollDebounce, { passive: true });
    return () => {
      obj.removeEventListener("scroll", onScrollDebounce);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [offset, containerRef]);

  return scrolled;
};
