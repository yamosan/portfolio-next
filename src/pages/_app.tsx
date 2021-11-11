import "@/shared/styles/global.css";
import "scroll-behavior-polyfill";
import "focus-visible";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

import Layout from "@/shared/components/layouts";
import BgStateProvider from "@/shared/store/bgState";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <BgStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BgStateProvider>
    </>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
