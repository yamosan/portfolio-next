import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import type { ComponentProps, VFC } from "react";
import { useCallback } from "react";

import { useCurrentBreakpoint } from "@/shared/hooks/useCurrentBreakpoint";
import { useBgState } from "@/shared/store/bgState";

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
      className={clsx("h-thead fixed top-0 w-full px-8 flex items-center justify-between text-white", className)}
      {...attrs}
    >
      {/* TODO: ロゴ */}
      {isSm && (
        <button onClick={handleClick} className="font-semibold">
          yamo&apos;s portfolio
        </button>
      )}
      <GlobalNav />
    </header>
  );
};

const GlobalNav: VFC = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-10 font-semibold">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
