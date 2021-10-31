import dynamic from "next/dynamic";
import type { FC } from "react";

import { Header } from "./Header";

const Background = dynamic(() => import("./background"), { ssr: false });

const Layout: FC = ({ children }) => {
  return (
    <>
      <Background />
      <Header className="z-20" />
      <div
        id="root"
        className="z-10 relative h-screen scrollbar-thin scrollbar-track-gray scrollbar-thumb-main scrollbar-thumb-rounded-full"
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
