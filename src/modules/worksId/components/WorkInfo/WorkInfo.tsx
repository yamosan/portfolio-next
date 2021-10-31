import clsx from "clsx";
import type { VFC } from "react";

import type { Work } from "@/types/work";

import { SkillMore } from "./SkillMore";

type Props = {
  work: Work;
};

export const WorkInfo: VFC<Props> = ({ work }) => {
  const { title, genre, role, skills, period } = work;
  return (
    <div
      className={clsx(
        "bg-grayDark bg-opacity-70 rounded-lg border border-white border-opacity-50 px-5 py-5 text-white"
      )}
    >
      <h3 className="font-semibold text-2xl text-center">{title}</h3>
      <dl className="mt-4 flex flex-col space-y-4">
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
          <dd className="ml-2 text-lg font-light">{skills.main}</dd>
          <div className="ml-2 self-center">
            <SkillMore keywords={skills.others} />
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
