import type { Work } from "@/types/work";

const conne: Work = {
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
    repository: "https://github.com/yamosan/Conne",
    site: "https://conne-game.herokuapp.com/",
  },
  content: [
    {
      head: "outline",
      description: [
        `五目並べ風対戦ボードゲームです。五目並べとぷよぷよを掛け合わせた様なルールになっています。
          サイトにアクセスするとランダムにマッチングして対戦が始まります。`,
        `是非タブを2つ開いて遊んでみてください。`,
      ],
    },
    {
      head: "rules",
      images: [
        {
          src: "/images/works/conne/rules/1.png",
          alt: "ルール1: 既にあるコマに重ねて配置したり盤面をはみ出しての配置は禁止。",
        },
        { src: "/images/works/conne/rules/2.png", alt: "ルール2: タテヨコ4連結以上の盤面を作れたら勝利。" },
      ],
      description: [
        `手前の3種類のコマが自分、奥側が相手のコマとなります。
          ターン制で、交互にコマをひとつボードに設置していき、特定の配置条件を満たした方が勝利します。
          次の相手ターンに配置されるコマの候補が常に見れる為、先読みして相手に不利な手を選ぶのが勝負の鍵となります。`,
        `勝利条件を狙いつつ、相手に勝たせないように配置を選ぶ戦略性を楽しめます。`,
      ],
    },
    {
      head: "system",
      images: [],
      description: [`マッチング部分はRailsのActionCable(WebSocket)を、フロントエンドはReactで実装しています。`],
    },
  ],
};
export default conne;
