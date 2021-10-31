import type { Work } from "@/types/work";

const data: Work = {
  id: "tetris",
  thumbnail: {
    imageUrl: "/images/works/tetris/thumbnail.jpg",
    youtubeId: "Rmd2ofFcIuo",
  },
  title: "Tetris",
  genre: "game",
  role: "solo",
  skills: { main: "Python/Illustrator", others: ["pygame", "Tkinter"] },
  period: "2months",
  content: [
    {
      head: "outline",
      description: [
        `プログラミングを始めてから初めて「作りきった」と思えた作品です。
          ゲームのロジック自体は簡単ですが、スコアの計算やランキング表示、キー押下時間によって挙動を調整したりかなり細部にまでこだわりました。
          `,
      ],
    },
    {
      head: "impression",
      description: [
        `プログラミングにハマるきっかけになった作品なので思い入れがあります。
          操作ひとつにおいても入力時間でスピードが変わったり、回転時に補正がなされていたりと、作る側になって初めて気づく工夫に感動しました。
          `,
      ],
    },
  ],
};
export default data;
