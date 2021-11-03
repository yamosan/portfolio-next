import type { VFC } from "react";

import { Menu } from "./Menu";

export const FlexMenu: VFC = () => {
  // TODO: prefetchの検証
  return (
    <nav>
      <Menu className="flex items-center space-x-10 font-semibold text-white" />
    </nav>
  );
};
