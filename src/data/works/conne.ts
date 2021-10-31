import type { Work } from "@/types/work";

const data: Work = {
  id: "conne",
  thumbnail: {
    imageUrl: "/images/works/conne/thumbnail.jpg",
    youtubeId: "JVUP3XAy1iw",
  },
  title: "Conne!",
  genre: "web/game",
  role: "frontend/backend",
  skills: {
    main: "React/Rails",
    others: ["WebSocket", "ActionCable", "redis", "ReactDnD", "styled-components", "Redux"],
  },
  period: "2months",
  urls: {
    repository: "https://github.com/yamori-masato/Conne",
    site: "https://conne-game.herokuapp.com/",
  },
  content: [
    {
      head: "outline",
      description: [
        `五目並べ風対戦ボードゲームです。五目並べとぷよぷよを掛け合わせた様なルールになっています。
          サイトにアクセスするとランダムにマッチングして対戦が始まります。`,
        `タブを2つ開いて是非遊んでみてください。`,
      ],
    },
    {
      head: "rules",
      images: [
        { src: "/images/works/conne/rules/1.png", alt: "ルール1" },
        { src: "/images/works/conne/rules/2.png", alt: "ルール2" },
      ],
      description: [
        `手前の3種類のコマが自分、奥側が相手のコマとなります。
          交互にひとつずつボードに設置していき特定の配置条件を満たした方が勝利となります。
          常に、次の相手のターンに配置されるコマの候補が見えています。勝利を狙うのも大事ですが相手に勝たせないように考えながら配置するのが鍵となります。
          `,
      ],
    },
    {
      head: "system",
      images: [],
      description: [
        `バックエンドでは、ランダムマッチはRedis、WebSocketはRailsのActionCableを使って実装しています。
          フロントエンドはReactで実装しています。フロントとバックそれぞれを独立させる構成をとりました。
          `,
      ],
    },
    {
      head: "impression",
      description: [
        `フロントエンドに興味を持って初めてReactを触った時の作品です。
          ゲームの進行状況はReduxで管理しました。ですが、状態遷移がそこまで複雑でなかった為、余計に複雑にしてしまうことになったのが反省点です。
          `,
        `これまでRubyでバックエンドを書くことがメインでしたが、今回フロントエンド↔︎バックエンドのやりとりを実装することで、より理解を深められたと思います。
          `,
      ],
    },
  ],
};
export default data;
