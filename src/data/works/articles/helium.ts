import type { Work } from "@/types/work";

const helium: Work = {
  id: "helium",
  thumbnail: {
    imageUrl: "/images/works/helium/thumbnail.jpg",
  },
  title: "HELIUM",
  genre: "web",
  role: "solo",
  skills: { main: "React", others: ["WebRTC", "Tone.js", "ReduxToolkit", "Firebase", "ChakraUI"] },
  period: "1months",
  urls: {
    site: "https://helium-86111.web.app",
  },
  content: [
    {
      head: "outline",
      description: [
        `ボイスチェンジャー付きビデオ通話アプリです。
          今は音程を高くするエフェクトしかかけられませんが、声質や音程を自由に調整できるようにしたいと考えています。`,
        `より楽しめるビデオ通話アプリを目指し現在改良中です。`,
      ],
    },
    {
      head: "system",
      images: [],
      description: [
        `シグナリングサーバーはFirebaseのrealtime databaseで、通信はP2Pフルメッシュで実装しました。`,
        `ボイスエフェクトはTone.jsのピッチシフターで実装しています。ストリームを送信する前に、音声トラックを加工済みの音声トラックと差し替えています。`,
        `現時点ではP2Pフルメッシュでの実装ですが、いずれSFUに移行したいと考えています。`,
      ],
    },
  ],
};

export default helium;
