import type { Work } from "@/types/work";

const enechalle: Work = {
  id: "enechalle",
  thumbnail: {
    imageUrl: "/images/works/enechalle/thumbnail.jpg",
  },
  title: "#エナドリチャレンジ応援わんこ",
  genre: "web",
  role: "backend",
  skills: {
    main: "Rails",
    others: ["バッチ処理", "Twitter Streaming API", "TwitterBot", "React", "TypeScript", "Firebase", "Heroku"],
  },
  period: "3days",
  urls: {
    site: "https://twitter.com/enechalleboy",
  },
  content: [
    {
      head: "outline",
      description: [
        `2021/03/12に行われた学生限定オンラインハッカソン「Boost」で最優秀賞を頂いた作品です。`,
        `限られた制作期間(3日間)の中で、初対面のチームメンバーと協力してアイデア出しから実装まで行いました。`,
      ],
    },
    {
      head: "concept",
      images: [{ src: "/images/works/enechalle/concept/1.png", alt: "アイデア出しの様子" }],
      description: [
        `ハッカソンのテーマは「Boost」でした。`,
        `『頑張りどき(例: レポート締め切り前夜)にエナドリツイートをしがち』というチームの共通認識から、頑張りどきに自分と同じく頑張っている人を見かけることで頑張れる(Boostできる)ようなサービスを目指して開発しました。`,
      ],
    },
    {
      head: "system",
      images: [
        {
          src: "/images/works/enechalle/system/1.png",
          alt: "#エナドリチャレンジをつけてツイートするとわんこが応援しにきてくれる",
        },
        { src: "/images/works/enechalle/system/2.png", alt: "6時間後にわんこがねぎらいの言葉をかけてくれる" },
      ],
      description: [
        `私はTwitterBotとフロントエンド向けのAPIを担当しました。具体的には以下の通りです。`,
        `  ① 特定の条件を満たすツイートを定期的に取得し、ツイート時とその6時間後にリプライを送る`,
        `  ② 現在チャレンジ中の人数とツイートを返すAPI`,
      ],
    },
  ],
};
export default enechalle;
