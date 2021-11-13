import type { GetStaticProps, NextPage } from "next";

import { Underlined } from "@/shared/components/basics/Underlined";
import { PageSeo } from "@/shared/components/layouts/PageSeo";
import { getAllWorks } from "@/shared/utils/works";
import type { Work } from "@/types/work";

import { Grid, GridItem } from "./components/Grid";
import { ThumbnailCard } from "./components/ThumbnailCard";

type Props = {
  works: Work[];
};

export const Works: NextPage<Props> = ({ works }) => {
  return (
    <>
      <PageSeo path="/works" subtitle="WORKS" />

      <section className="pt-48 flex flex-col items-center">
        <Underlined as="h2">WORKS</Underlined>
        <Grid className="w-11/12 sm:w-4/5 max-w-[1000px] my-12">
          {works.map((work, i) => (
            <GridItem key={work.id}>
              <ThumbnailCard work={work} priority={i <= 4} />
            </GridItem>
          ))}
        </Grid>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const works = await getAllWorks();

  return {
    props: {
      works,
    },
  };
};
