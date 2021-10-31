import * as works from "@/data/works";
import type { Work } from "@/types/work";

export const getAllWorks = (): Work[] => {
  return Object.values(works);
};
