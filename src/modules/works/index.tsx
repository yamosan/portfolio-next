import type { GetStaticProps, NextPage } from "next";

import { getAllWorks } from "@/shared/utils/works";
import type { Work } from "@/types/work";

type Props = {
  works: Work[];
};

export const Works: NextPage<Props> = ({ works }) => {
  console.log({ works });
  return (
    <>
      <h1>{JSON.stringify(works)}</h1>
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
