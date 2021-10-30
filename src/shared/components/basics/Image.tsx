import NextImage from "next/image";
import type { ComponentProps, VFC } from "react";

type Props = ComponentProps<typeof NextImage>;

export const Image: VFC<Props> = (props) => {
  return <NextImage {...props} />;
};
