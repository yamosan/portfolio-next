import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { ViewSource, VisitWebsite } from "@/modules/worksId/components/IconBadge";
import { getAllWorks, getWorkById } from "@/shared/utils/works";
import type { Work } from "@/types/work";

import { Thumbnail } from "./components/Thumbnail";
import { WorkInfo } from "./components/WorkInfo";

type Props = {
  work: Work;
};
export const WorksId: NextPage<Props> = ({ work }) => {
  return (
    <div className="h-screen w-10/12 mx-auto pt-28 flex justify-between">
      <aside className="flex-shrink-0" style={{ width: "280px" }}>
        <WorkInfo work={work} />
        <ul className="mt-6 flex justify-center space-x-2">
          {work.urls?.site && (
            <li>
              <Link href={work.urls?.site}>
                <a className="block">
                  <ViewSource />
                </a>
              </Link>
            </li>
          )}
          {work.urls?.repository && (
            <li>
              <Link href={work.urls?.repository}>
                <a className="block">
                  <VisitWebsite />
                </a>
              </Link>
            </li>
          )}
        </ul>
      </aside>

      <main style={{ width: "calc(100% - 310px)" }}>
        <Thumbnail title={work.title} thumbnail={work.thumbnail} />
      </main>
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
