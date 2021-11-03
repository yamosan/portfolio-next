import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import type { ComponentProps, VFC } from "react";
import { useCallback } from "react";

import { useCurrentBreakpoint } from "@/shared/hooks/useCurrentBreakpoint";
import { useBgState } from "@/shared/store/bgState";

import { DrawerMenu, FlexMenu } from "./GlobalNav";

type Props = ComponentProps<"header">;

export const Header: VFC<Props> = ({ className, ...attrs }) => {
  const { setCount } = useBgState();
  const router = useRouter();
  const { isSm } = useCurrentBreakpoint();

  const handleClick = useCallback(() => {
    if (setCount) {
      if (router && router.pathname === "/") {
        const elm = document.getElementById("root");
        if (elm) {
          elm.scrollTo({ top: 0 });
        }
      } else {
        router.push("/");
      }
      setCount((count) => count + 1);
    }
  }, [setCount, router]);

  return (
    <header
      className={clsx(
        "fixed z-50 h-thead top-0 w-full px-5 sm:px-8 flex items-center justify-between text-white bg-black bg-opacity-80",
        className
      )}
      {...attrs}
    >
      {/* TODO: ロゴ */}
      <button onClick={handleClick} className="font-semibold p-1.5">
        yamo&apos;s portfolio
      </button>

      {isSm ? <FlexMenu /> : <DrawerMenu />}
    </header>
  );
};
