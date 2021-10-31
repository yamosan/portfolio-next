import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";

import Layout from "@/shared/components/layouts";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
