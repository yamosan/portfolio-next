import type { Work } from "@/types/work";

const geikoten2021: Work = {
  id: "geikoten2021",
  thumbnail: {
    imageUrl: "/images/works/geikoten2021/thumbnail.jpg",
  },
  title: "芸工展2021",
  genre: "web",
  role: "frontend",
  skills: {
    main: "React(Next.js)",
    others: ["TypeScript", "Tailwind CSS", "styled-jsx", "GAS", "Github Action", "Firestore"],
  },
  period: "3weeks",
  urls: {
    site: "https://geikousai-ncu.com/2021/",
    repository: "https://github.com/yamosan/geikoten2021",
  },
  content: [
    {
      head: "outline",
      description: [
        `芸工展2021のWebサイトです。今年はオンライン開催だったので、これまで対面でやっていた作品展示や企画・イベントをWeb上で実現するよう努めました。`,
      ],
    },
    {
      head: "system",
      images: [],
      description: [
        `① デプロイ`,
        `Github Actionsでデプロイを自動化しています。`,
        ` - github pages(デザイナー確認用)`,
        ` - SCPでレンタルサーバーにデプロイ(本番環境)`,
        `② 作品投稿`,
        `芸工展では毎年、学生から1人1作品提出してもらい当日に展示しています。今年はこれをWebで実現するのでデータの手入力は極力避けたかったです(100作品以上)。なので、google formで提出してもらった作品データがそのままAPIとして機能するようにGASで実装しました。`,
        `③ 作品投票機能`,
        `投票情報の保存にはFirestoreを用いました。ひとりで投票できる作品数に上限はありませんが、既に投票済みの作品には投票できない仕様なのでlocal storageを使用しました。`,
        `(ページURL: https://geikousai-ncu.com/2021/project/exhibition/shutter )`,
      ],
    },
    {
      head: "impression",
      description: [
        `とにかく忙しかったです！(約3週間で400コミット)`,
        `出来るだけ見た目の実装に時間を充てられるよう、本番環境へのデプロイの自動化や、データのAPI化など、その他の作業の効率化を図りました。`,
        `結果的に、(アニメーションはもう少し頑張りたかったですが)、細かい部分までこだわった上で完成させられたのでよかったです。`,
      ],
    },
  ],
};
export default geikoten2021;
