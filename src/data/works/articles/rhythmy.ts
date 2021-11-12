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
        `
          「混ざる/混ぜる」がテーマの実習制作で、誰でもスマホから気軽に参加できるを目標に制作したインスタレーション作品です。
          手持ちのスマホからそれぞれ割り振られたパートを操作するとメインモニターにリアルタイムに反映され、参加者全員での擬似演奏体験を楽しめる作品となっています。
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
        `これらをWebSocket(Socket.io)で繋ぐことでリアルタイムでメインモニターに反映されるようになっています。`,
        `スマホ側で画面タッチ時にSocket.ioのイベントが走り、メインモニター側のデータを書き換える処理を行っています。`,
        `アニメーションはp5.jsで1からつくりました。`,
      ],
    },
    {
      head: "impression",
      description: [
        `TypeScriptを使い始めてから初めての制作でした。`,
        `一番苦戦したのはフロントエンド↔︎バックエンド間のデータのやりとりにおける型の共有です。
          元々これがしたかった為バックエンドもTypeScriptで書きました。
          しかし、Socket.ioにおけるデータはデフォルトでany...
          どうしても諦められなかったのでSocket.ioの型定義を上書きし自力で型をつけました。`,
        `クリエイティブ系の作品制作は初の試みだったのでビジュアル面においてもかなり苦戦しました。
         音とアニメーションの同期は難しく苦戦しましたが、色々なライブラリを試した結果上手くいったのでよかったです。`,
      ],
    },
  ],
};

export default rhythmy;
