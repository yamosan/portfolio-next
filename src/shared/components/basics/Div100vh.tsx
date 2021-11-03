import type { ComponentPropsWithoutRef, ElementType } from "react";
import { forwardRef } from "react";

import { use100vh } from "@/shared/hooks/use100vh";

type Props = {
  as?: ElementType;
} & ComponentPropsWithoutRef<"div">;

export const Div100vh = forwardRef<HTMLDivElement, Props>(({ style, as: Tag = "div", ...attrs }, ref) => {
  const height = use100vh();

  const styleWithRealHeight = {
    ...style,
    height: height ? `${height}px` : "100vh",
  };
  return <Tag ref={ref} style={styleWithRealHeight} {...attrs} />;
});

Div100vh.displayName = "Div100vh";
