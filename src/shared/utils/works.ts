import { PUBLISHED } from "@/data/works/published";
import type { Work } from "@/types/work";

// TODO: 日付プロパティを追加
// TODO: MDXで作成
export const getAllWorks = (): Work[] => {
  return PUBLISHED;
};

export const getWorkById = (id: string): Work | undefined => {
  const works = getAllWorks();
  return works.find((work) => work.id === id);
};
