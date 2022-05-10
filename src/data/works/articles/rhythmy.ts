import type { Work } from "@/types/work";

const rhythmy: Work = {
  id: "rhythmy",
  thumbnail: {
    imageUrl: "/images/works/rhythmy/thumbnail.jpg",
    youtubeId: "3pl65K2d82w",
  },
  title: "rhythmy",
  genre: "installation",
  role: "solo",
  skills: { main: "TypeScript", others: ["p5.js", "Tone.js", "Socket.IO", "Express.js", "webpack", "GitHub Actions"] },
  period: "3months",
  urls: {
    repository: "https://github.com/yamosan/rhythm",
  },
  content: [
    {
      head: "outline",
      images: [],
      description: [
        `スマホから参加できる演奏体験型インスタレーション作品です。`,
        `手持ちのスマホからそれぞれ割り振られたパートを操作するとメインモニターにリアルタイムに反映され、参加者全員での擬似演奏体験を楽しめる作品となっています。
          パートごとに違った音・アニメーションになっているので視覚的にも聴覚的にも楽しめます。
          `,
      ],
    },
    {
      head: "system",
      images: [
        { src: "/images/works/rhythmy/system/1.png", alt: "作品の説明" },
        { src: "/images/works/rhythmy/system/2.png", alt: "作品の説明" },
      ],
      description: [
        `Express.jsでふたつのエンドポイントを用意しました。`,
        `①「/monitor」... メインモニター`,
        `② 「/player」... 参加者はQRコードを読み込むことでスマホからアクセス`,
        `これらをWebSocketで繋ぐことでリアルタイムでメインモニターに反映されるようになっています。`,
        `スマホ側で画面タッチ時にSocket.ioのイベントが走り、メインモニター側のデータを書き換える処理を行っています。`,
        `アニメーションはp5.jsで実装しました。`,
      ],
    },
  ],
};

export default rhythmy;
