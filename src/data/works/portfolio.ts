import type { Work } from "@/types/work";

const data: Work = {
  id: "portfolio",
  thumbnail: {
    imageUrl: "/images/works/portfolio/thumbnail.png",
  },
  title: "portfolio",
  genre: "web",
  role: "solo",
  skills: {
    main: "React",
    others: ["TypeScript", "p5.js", "styled-components", "Firebase"],
  },
  period: "1month",
  urls: {
    repository: "https://github.com/yamori-masato/portfolio",
  },
  content: [
    {
      head: "outline",
      description: [`本サイトです。デザインからコーディングまで1人で行いました。`],
    },
    {
      head: "concept",
      description: [
        `コンセプトは「作品の仕様と経緯をわかりやすく伝える」です。`,
        `その為、作品詳細ページの見やすさにはかなりこだわりました。
          作品それぞれのコンセプトはもちろん、採用した技術や仕組みまでしっかり伝えようと努めました。
          `,
        `技術的には「出来るだけUIは自力で実装する」という目標を掲げ制作に取り組みました。`,
      ],
    },
    {
      head: "system",
      description: [
        `背景のアニメーションはp5.jsで書いています。
          インタラクティブなサイトにしたいという思いがあったので採用しました。
          リロードするたびにパターンが変わりクリックすると光ります。
          `,
      ],
    },
    {
      head: "impression",
      description: [
        `Webサイトをレスポンシブ含めてしっかりコーディングするのは初めてだった為、デバイス・ブラウザ間の差異をなくすのにはかなり苦労しました。`,
        `iosで100vhが表示ずれしたり、matchMediaを使おうとしたらsafariで実装されていないからpolyfillを実装したり...`,
        `完成してから多くの人に試してもらう大切さを身をもって実感しました。`,
      ],
    },
  ],
};

export default data;
