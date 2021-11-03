import clsx from "clsx";
import { useRouter } from "next/router";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useCallback, useEffect, useState } from "react";

import { MENU_LIST } from "./constants";

type Props = {
  onLinkClick?: () => void;
  prefetch?: boolean;
} & ComponentPropsWithoutRef<"ul">;

export const Menu = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const { onLinkClick, prefetch, className, ...attrs } = props;
  const [fetched, setFetched] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (prefetch && !fetched) {
      MENU_LIST.forEach(({ path }) => {
        router.prefetch(path);
      });
      setFetched(true);
    }
  }, [prefetch, router, fetched]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, path: string) => {
      e.preventDefault();

      if (onLinkClick) {
        onLinkClick();
      }
      if (router.pathname !== path) {
        router.push(path);
      }
    },
    [router, onLinkClick]
  );

  return (
    <ul ref={ref} className={clsx(className)} {...attrs}>
      {MENU_LIST.map((menu) => (
        <li key={menu.text}>
          <button onClick={(e) => handleClick(e, menu.path)}>{menu.text}</button>
        </li>
      ))}
    </ul>
  );
});

Menu.displayName = "Menu";
