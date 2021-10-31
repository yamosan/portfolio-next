import dynamic from "next/dynamic";
import type { FC } from "react";

import { Header } from "./Header";

// import { useState } from "react";
// import Background from "./background";

const Background = dynamic(() => import("./background"), { ssr: false });

const Layout: FC = ({ children }) => {
  return (
    <>
      <Background />
      <Header className="z-20" />
      <main
        id="sroot"
        className="z-10 relative h-screen scrollbar-thin scrollbar-track-gray scrollbar-thumb-main scrollbar-thumb-rounded-full"
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
