import "@/shared/styles/global.css";
import "scroll-behavior-polyfill";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextHeadSeo from "next-head-seo";

import Layout from "@/shared/components/layouts";
import BgStateProvider from "@/shared/store/bgState";

// TODO: ページ遷移でトランジション
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
