import type { NextPage } from "next";
import type { VFC } from "react";
import { useCallback } from "react";
import { useRef } from "react";

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
  const aboutRef = useRef<HTMLDivElement>(null);
  const handleClick = useCallback(() => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="relative flex items-center justify-center h-screen">
        <h1 className="text-white text-6xl font-semibold flex flex-col sm:flex-row">
          <span className="inline-block">Hello,</span>
          <span className="inline-block">
            I&apos;m Yam<span className="text-main">o</span>.
          </span>
        </h1>
        <button onClick={handleClick} className="block absolute bottom-0 mb-10">
          <p className="text-white font-regular">about me!</p>
          <div className="animate-fade-in-down" aria-hidden>
            <div className="mx-auto w-4 h-4 border-main border-b-2 border-r-2 transform origin-center rotate-45"></div>
          </div>
        </button>
      </section>
      <section
        ref={aboutRef}
        className="flex flex-col space-y-6 lg:space-y-12 items-center justify-center pt-28 sm:pt-48 lg:pt-0 min-h-screen"
      >
        <h2 className="w-max text-white text-lg font-medium relative after:absolute after:bg-main after:h-0.5 after:w-7/12 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transform">
          ABOUT ME
        </h2>
        <SelfIntroductionCard />
      </section>
    </>
  );
};

const SelfIntroductionCard: VFC = () => {
  return (
    <div className="bg-grayDark bg-opacity-70 py-14 px-4 w-11/12 max-w-app mx-auto flex flex-col justify-between space-y-4 items-center rounded-md text-white lg:px-8 lg:flex-row md:w-4/5 lg:space-y-0">
      <div className="flex-[3] flex flex-col items-center space-y-4">
        <div className="mx-auto relative rounded-full overflow-hidden w-40 h-40 lg:w-56 lg:h-56">
          <Image layout="fill" src="/images/headshot.jpg" alt="私の写真" />
        </div>
        <p>Yamori Masato</p>
        <div>{/* TODO: SNS */}</div>
      </div>

      <div className="flex-[7]">
        <dl className="w-11/12 mx-auto text-sm leading-loose flex flex-col space-y-2 lg:text-base lg:space-y-4">
          {ABOUT_ME.map(({ dt, dd }) => (
            <div key={dt}>
              <dt className="inline font-medium whitespace-nowrap">{dt}:</dt>
              <dd className="inline ml-3 font-light break-all">{dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Root;
