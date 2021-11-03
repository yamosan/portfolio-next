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
        // TODO: スクロールバーの色を変える。ヘッダーと被らないようにする
        // className="relative h-screen scrollbar-thin scrollbar-track-gray scrollbar-thumb-main scrollbar-thumb-rounded-full"
        className="relative h-screen"
      >
        <Header />

        {children}
      </div>
    </>
  );
};

export default Layout;
