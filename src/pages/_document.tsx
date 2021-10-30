import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          {/* <link rel="icon" sizes="48x48" href={"/favicon/favicon.ico"} />
          <link rel="apple-touch-icon" sizes="180x180" href={"/favicon/apple-touch-icon.png"} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
