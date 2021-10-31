import dynamic from "next/dynamic";
import type { FC } from "react";

// import { useState } from "react";
// import Background from "./background";

const Background = dynamic(() => import("./background"), { ssr: false });

const Layout: FC = ({ children }) => {
  // const [count, setCount] = useState<number>(0);
  // const onLogoClick = () => {
  //   setCount((prev) => prev + 1);
  // };
  return (
    <div>
      {/* <Background count={count} /> */}
      <Background count={0} />
      <main className="z-10 relative h-screen scrollbar-thin scrollbar-track-gray scrollbar-thumb-main scrollbar-thumb-rounded-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
