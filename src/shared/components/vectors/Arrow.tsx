import type { ComponentProps, VFC } from "react";

type Props = {
  className?: string;
} & ComponentProps<"svg">;

export const Arrow: VFC<Props> = ({ className, ...attrs }) => {
  return (
    <svg className={className} fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...attrs}>
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
    </svg>
  );
};
