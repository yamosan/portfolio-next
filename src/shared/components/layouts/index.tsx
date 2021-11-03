import dynamic from "next/dynamic";
import type { FC } from "react";

import { Header } from "./Header";

const Background = dynamic(() => import("./background"), { ssr: false });

const Layout: FC = ({ children }) => {
  return (
    <>
      <Background />
      <div
        id="root"
        className="relative h-screen scrollbar-thin scrollbar-track-gray scrollbar-thumb-main scrollbar-thumb-rounded-full"
      >
        <Header />

        {children}
      </div>
    </>
  );
};

export default Layout;
