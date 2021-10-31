import clsx from "clsx";
import type { ComponentProps, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"ul">;

export const Grid: VFC<Props> = ({ children, className, ...attrs }) => {
  return (
    <ul className={clsx("grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-6", className)} {...attrs}>
      {children}
    </ul>
  );
};

export const GridItem: VFC<ComponentProps<"li">> = ({ children, ...attrs }) => {
  return <li {...attrs}>{children}</li>;
};
