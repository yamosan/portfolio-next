import type { FC } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

import sketch from "@/sketch/sketch";

type Props = {
  count?: number;
};

const Background: FC<Props> = ({ count }) => {
  return (
    <div className="fixed bg-black inset-0 overflow-hidden">
      <ReactP5Wrapper sketch={sketch} count={count} />
    </div>
  );
};

// TODO: named export
export default Background;
