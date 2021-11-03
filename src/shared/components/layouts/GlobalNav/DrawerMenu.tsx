import clsx from "clsx";
import type { RefObject, VFC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Hamburger } from "./Hamburger";
import { Menu } from "./Menu";

export const DrawerMenu: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  useFocusTrap(isOpen, dialogRef, [toggleBtnRef]);

  return (
    <>
      <nav
        className={clsx(
          "fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 transition-all duration-500",
          {
            "visible opacity-100 pointer-events-auto": isOpen,
            "invisible opacity-0 pointer-events-none": !isOpen,
          }
        )}
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
      >
        <Menu prefetch={isOpen} className="flex flex-col items-center space-y-10 font-semibold text-white text-2xl" />
      </nav>

      <Hamburger onClick={toggleOpen} buttonRole={isOpen ? "close" : "open"} ref={toggleBtnRef} />
    </>
  );
};

const useFocusTrap = (activate: boolean, containerRef: RefObject<HTMLElement>, others: RefObject<HTMLElement>[]) => {
  useEffect(() => {
    if (containerRef.current === null) return;

    const children = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(
        // https://gomakethings.com/how-to-get-the-first-and-last-focusable-elements-in-the-dom/
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );
    const otherElms = others.filter((ref) => ref.current !== null).map((ref) => ref.current) as HTMLElement[];
    const focusable: HTMLElement[] = [...children, ...otherElms];

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onKeydown = (e: KeyboardEvent) => {
      if (!activate) return;
      if (e.key === "Escape") {
        close();
      } else if (e.key === "Tab" && !e.shiftKey) {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      } else if (e.key === "Tab" && e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [containerRef, others, activate]);
};
