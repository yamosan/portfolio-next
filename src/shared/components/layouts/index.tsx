import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import RootRefProvider from "@/shared/store/rootRef";

import { Header } from "./Header";

const Background = dynamic(() => import("./background"), { ssr: false });

const Layout: FC = ({ children }) => {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rootElm = rootRef.current;
    if (rootElm === null) return;

    rootElm.scrollTo({ top: 0 });
  }, [router, rootRef]);

  return (
    <>
      <RootRefProvider rootRef={rootRef}>
        <Background />
        <div
          ref={rootRef}
          // TODO: スクロールバーの色を変える。ヘッダーと被らないようにする
          className="relative z-10 h-screen scrollbar-thin scrollbar-track-gray scrollbar-thumb-main scrollbar-thumb-rounded-full"
        >
          <Header />
          <motion.div
            key={router.pathname}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        </div>
      </RootRefProvider>
    </>
  );
};

export default Layout;
