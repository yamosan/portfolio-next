import clsx from "clsx";
import type { ComponentProps, VFC } from "react";

import { Image } from "@/shared/components/basics/Image";

import { SnsList } from "./SnsList";

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

type Props = ComponentProps<"div">;

export const SelfIntroductionCard: VFC<Props> = ({ className, ...attrs }) => {
  return (
    <div
      className={clsx(
        "bg-grayDark bg-opacity-70 py-14 px-4 flex flex-col justify-between space-y-4 items-center rounded-md text-white lg:px-8 lg:flex-row md:w-4/5 lg:space-y-0",
        className
      )}
      {...attrs}
    >
      <div className="flex-[3] flex flex-col items-center">
        <div className="mx-auto relative rounded-full overflow-hidden w-40 h-40 lg:w-56 lg:h-56 select-none">
          <Image layout="fill" src="/images/headshot.jpg" alt="私の写真" />
        </div>
        <p className="mt-4">Masato Yamori</p>
        <div className="mt-2">
          <SnsList className="w-full" />
        </div>
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
