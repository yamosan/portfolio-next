import * as works from "@/data/works";
import type { Work } from "@/types/work";

export const getAllWorks = (): Work[] => {
  return Object.values(works);
};

export const getWorkById = (id: string): Work | undefined => {
  const works = getAllWorks();
  return works.find((work) => work.id === id);
};
