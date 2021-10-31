import clsx from "clsx";
import type { ComponentProps, ElementType, ReactNode } from "react";
import { forwardRef } from "react";

type Props = {
  as?: ElementType;
  children?: ReactNode;
  hoverAnimate?: boolean;
} & ComponentProps<ElementType>;

export const Underlined = forwardRef<HTMLElement, Props>(
  ({ as: Tag = "span", children, hoverAnimate, ...attrs }, ref) => {
    return (
      <Tag ref={ref} className={clsx("w-max text-white text-lg font-medium relative group")} {...attrs}>
        {children}
        <span
          className={clsx(
            "absolute bg-main h-0.5 w-7/12 bottom-0 left-1/2 -translate-x-1/2 transform",
            hoverAnimate && "transition duration-200 scale-x-0 group-hover:scale-x-100"
          )}
          aria-hidden
        ></span>
      </Tag>
    );
  }
);

Underlined.displayName = "Underlined";
