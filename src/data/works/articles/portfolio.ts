import type { Work } from "@/types/work";

const portfolio: Work = {
  id: "portfolio",
  thumbnail: {
    imageUrl: "/images/works/portfolio/thumbnail.png",
  },
  title: "portfolio",
  genre: "web",
  role: "solo",
  skills: {
    main: "React(Next.js)",
    others: ["TypeScript", "p5.js", "Tailwind CSS"],
  },
  period: "1month",
  urls: {
    repository: "https://github.com/yamosan/portfolio",
  },
  content: [
    {
      head: "outline",
      description: [
        `本サイトです。デザインからコーディングまで1人で制作しました。`,
        `※ 2021/11/11にリニューアルしました。(CRA -> Next.js)`,
        `旧レポジトリ: https://github.com/yamosan/portfolio-cra`,
      ],
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
        `CRA, firebase-hosting の構成から Next.js, Vercelの構成に移行しました。`,
        `一から作り直しましたが、ディレクトリ構成、コンポーネント設計等、昔と比べると成長を感じられました。`,
        `移行後、一番のこだわりはキー操作です。focus-visibleでスタイルが変わるようにしたり、スマホのモーダルでフォーカストラップを実装したりと、細部までこだわりました。`,
      ],
    },
  ],
};

export default portfolio;
