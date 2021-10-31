import type { NextPage } from "next";

import { Image } from "@/shared/components/basics/Image";

const ABOUT_ME = [
  {
    dt: "生年月日",
    dd: "2000/12/18",
  },
  {
    dt: "趣味",
    dd: "バンド",
  },
  {
    dt: "特技",
    dd: "ドラム",
  },
  {
    dt: "ひとこと",
    dd: "ITのモノづくりが大好きです。アプリ, ゲーム, クリエイティブコーディング等なんでも興味あります。",
  },
  {
    dt: "スキル",
    dd: "HTML/CSS/JavaScript/TypeScript/Node/React/Ruby/Rails/Python/Processing/Docker",
  },
];

const Root: NextPage = () => {
  return (
    <>
      <section className="relative flex items-center justify-center h-screen">
        <h1 className="text-white text-6xl font-semibold">
          Hello, I&apos;m Yam<span className="text-main">o</span>.
        </h1>
        <div className="absolute bottom-0 mb-10">
          <p className="text-white font-regular">about me!</p>
          <div className="animate-fade-in-down" aria-hidden>
            <div className="mx-auto w-4 h-4 border-main border-b-2 border-r-2 transform origin-center rotate-45"></div>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-12 items-center justify-center h-screen">
        <h2 className="w-max text-white text-lg font-medium relative after:absolute after:bg-main after:h-0.5 after:w-7/12 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transform">
          ABOUT ME
        </h2>
        <div className="bg-grayDark bg-opacity-70 py-14 px-8 w-4/5 max-w-[1100px] mx-auto flex justify-between items-center rounded-md">
          <div className="flex-[3]">
            <div className="mx-auto relative rounded-full overflow-hidden w-56 h-56">
              <Image layout="fill" src="/images/headshot.jpg" alt="私の写真" />
            </div>
            <div>{/* TODO: SNS */}</div>
          </div>

          <div className="flex-[7]">
            <dl className="w-11/12 mx-auto text-white leading-loose flex flex-col space-y-4">
              {ABOUT_ME.map(({ dt, dd }) => (
                <div key={dt}>
                  <dt className="inline whitespace-nowrap">{dt}:</dt>
                  <dd className="inline ml-3 font-light break-all">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Root;
