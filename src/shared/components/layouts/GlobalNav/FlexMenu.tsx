import type { VFC } from "react";

import { Menu } from "./Menu";

export const FlexMenu: VFC = () => {
  return (
    <nav>
      <Menu prefetch={true} className="flex items-center space-x-10 font-semibold text-white" />
    </nav>
  );
};
