import clsx from "clsx";
import type { ComponentProps, VFC } from "react";

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

export const SelfIntroductionCard: VFC<ComponentProps<"div">> = ({ className, ...attrs }) => {
  return (
    <div
      className={clsx(
        "bg-grayDark bg-opacity-70 py-14 px-4 flex flex-col justify-between space-y-4 items-center rounded-md text-white lg:px-8 lg:flex-row md:w-4/5 lg:space-y-0",
        className
      )}
      {...attrs}
    >
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
