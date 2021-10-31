import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { ViewSource, VisitWebsite } from "@/modules/worksId/components/IconBadge";
import { useCurrentBreakpoint } from "@/shared/hooks/useCurrentBreakpoint";
import { getAllWorks, getWorkById } from "@/shared/utils/works";
import type { Work } from "@/types/work";

import { Contents } from "./components/Contents";
import { Thumbnail } from "./components/Thumbnail";
import { WorkInfo } from "./components/WorkInfo";

type Props = {
  work: Work;
};
export const WorksId: NextPage<Props> = ({ work }) => {
  const { isLg } = useCurrentBreakpoint();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto pt-28 flex justify-between">
      {isLg && (
        <aside className="flex-shrink-0" style={{ width: "280px" }}>
          <div className="sticky top-thead">
            <WorkInfo work={work} />
            <ul className="mt-6 flex justify-center space-x-2">
              {work.urls?.site && (
                <li>
                  <ViewSource href={work.urls?.site} />
                </li>
              )}
              {work.urls?.repository && (
                <li>
                  <VisitWebsite href={work.urls?.repository} />
                </li>
              )}
            </ul>
          </div>
        </aside>
      )}

      <main style={{ width: `calc(100% - ${isLg ? "310px" : "0px"})` }}>
        <Thumbnail title={work.title} thumbnailUrl={work.thumbnail.imageUrl} youtubeId={work.thumbnail.youtubeId} />
        <Contents contents={work.content} className="mt-10 md:mt-20" />
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
