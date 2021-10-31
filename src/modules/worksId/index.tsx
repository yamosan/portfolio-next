import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { ViewSource, VisitWebsite } from "@/modules/worksId/components/IconBadge";
import { getAllWorks, getWorkById } from "@/shared/utils/works";
import type { Work } from "@/types/work";

import { WorkInfo } from "./components/WorkInfo";

type Props = {
  work: Work;
};
export const WorksId: NextPage<Props> = ({ work }) => {
  return (
    <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-center">
      <WorkInfo work={work} />

      <ul className="flex space-x-2">
        <li>
          <ViewSource />
        </li>
        <li>
          <VisitWebsite />
        </li>
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const workId = params?.id as string;
  const work = getWorkById(workId);

  if (work === undefined) {
    throw new Error(`Work with id ${workId} not found`);
  }

  return {
    props: {
      work,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const works = await getAllWorks();

  return {
    paths: works.map((work) => ({ params: { id: work.id } })),
    fallback: false,
  };
};
