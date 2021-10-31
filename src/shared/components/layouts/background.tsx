import type { FC } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

import { useBgState } from "@/shared/store/bgState";
import sketch from "@/sketch/sketch";

const Background: FC = () => {
  const { count } = useBgState();
  return (
    <div className="fixed bg-black inset-0 overflow-hidden">
      <ReactP5Wrapper sketch={sketch} count={count} />
    </div>
  );
};

// TODO: named export
export default Background;
