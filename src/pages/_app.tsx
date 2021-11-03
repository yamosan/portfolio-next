import "@/shared/styles/global.css";

import type { AppProps } from "next/app";

import Layout from "@/shared/components/layouts";
import BgStateProvider from "@/shared/store/bgState";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BgStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BgStateProvider>
  );
};

export default App;
