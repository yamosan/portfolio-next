import clsx from "clsx";
import type { VFC } from "react";

import { Arrow } from "@/shared/components/vectors/Arrow";

type Props = {
  keywords: string[];
};

export const SkillMore: VFC<Props> = ({ keywords }) => {
  return (
    <div className="flex flex-col items-center group">
      <span>
        <Arrow width={18} height={18} />
      </span>
      <div
        className={clsx(
          "relative flex justify-center invisible opacity-0",
          "transition-all duration-200 group-hover:visible group-hover:opacity-100"
        )}
      >
        <div className="absolute w-[300px] mt-2 p-2 pt-2.5 bg-gray">
          <span className="block transform origin-center absolute left-1/2 -translate-x-1/2 translate-y-1/2 -top-3 w-3 h-3 rotate-45 bg-gray"></span>
          <h4 className="w-4/5 mx-auto text-center text-lg pb-1 border-b border-white border-opacity-50">Keywords</h4>
          <div className="mt-3.5 table m-auto">
            {keywords.map((keyword, i) => (
              <div
                key={i.toString()}
                className="inline-block border rounded-3xl text-xs py-1 px-2 ml-1 mb-2 first-of-type:ml-0"
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
