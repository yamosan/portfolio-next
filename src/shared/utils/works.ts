import * as works from "@/data/works";
import type { Work } from "@/types/work";

// TODO: 日付プロパティを追加
// TODO: MDXで作成
export const getAllWorks = (): Work[] => {
  const order = ["portfolio", "rhythmy", "helium", "enechalle", "conne", "tetris"];
  return Object.values(works).sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
};

export const getWorkById = (id: string): Work | undefined => {
  const works = getAllWorks();
  return works.find((work) => work.id === id);
};
