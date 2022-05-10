import type { Work } from "@/types/work";

const portfolio: Work = {
  id: "portfolio",
  thumbnail: {
    imageUrl: "/images/works/portfolio/thumbnail.jpg",
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
        作品それぞれのコンセプトはもちろん、採用した技術や仕組みまでしっかり伝えられる作りにしました。`,
        `技術的には「UIは出来るだけ自力で実装する」という目標を掲げ制作に取り組みました。`,
      ],
    },
    {
      head: "system",
      description: [
        `背景のアニメーションはp5.jsで書いています。
          インタラクティブなサイトにしたいという思いがあったので採用しました。
          リロードするたびに背景パターンが変わりクリックすると光ります。
          `,
      ],
    },
  ],
};

export default portfolio;
