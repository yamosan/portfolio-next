import clsx from "clsx";
import type { VFC } from "react";

import { SkillMore } from "./SkillMore";

type Props = {
  title: string;
  genre: string;
  role: string;
  skill: string;
  skillKeywords: string[];
  period: string;
};

export const WorkInfo: VFC<Props> = ({ title, genre, role, skill, skillKeywords, period }) => {
  return (
    <div
      className={clsx(
        "bg-grayDark bg-opacity-70 rounded-lg border border-white border-opacity-50 p-5 min-w-[280px] text-white"
      )}
    >
      <h3 className="font-semibold text-2xl text-center">{title}</h3>
      <dl className="mt-5 flex flex-col space-y-6">
        <div className="flex items-end">
          <dt className="text-xl font-medium">Genre:</dt>
          <dd className="ml-2 text-lg font-light">{genre}</dd>
        </div>
        <div className="flex items-end">
          <dt className="text-xl font-medium">Role:</dt>
          <dd className="ml-2 text-lg font-light">{role}</dd>
        </div>
        <div className="flex items-end">
          <dt className="text-xl font-medium">Skill:</dt>
          <dd className="ml-2 text-lg font-light">{skill}</dd>
          <div className="ml-2 self-center">
            <SkillMore keywords={skillKeywords} />
          </div>
        </div>
        <div className="flex items-end">
          <dt className="text-xl font-medium">Period:</dt>
          <dd className="ml-2 text-lg font-light">{period}</dd>
        </div>
      </dl>
    </div>
  );
};
