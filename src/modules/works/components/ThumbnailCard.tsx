import clsx from "clsx";
import Link from "next/link";
import type { VFC } from "react";

import { Image } from "@/shared/components/basics/Image";
import type { Work } from "@/types/work";

type Props = {
  work: Work;
};

export const ThumbnailCard: VFC<Props> = ({ work }) => {
  const { id, thumbnail, title, genre } = work;

  return (
    <Link href={`/works/${id}`}>
      <a className="block group rounded-lg overflow-hidden border border-white border-opacity-10 outline-none focus-visible:ring-main focus-visible:ring-2 focus-visible:ring-opacity-80">
        <figure className="relative aspect-w-16 aspect-h-9 bg-grayDark">
          <Image src={thumbnail.imageUrl} alt={title} layout="fill" />
          {/* TODO: linear-gradientをより見やすく */}
          <div
            className={clsx(
              "absolute z-10 inset-0 bg-gradient-to-b from-transparent via-transparent to-black transition-opacity duration-300 md:opacity-0 opacity-80",
              "group-hover:opacity-70 group-focus-visible:opacity-80"
            )}
          ></div>
          <div
            className={clsx(
              "absolute z-20 inset-0 flex items-end py-3.5 px-5 transition-opacity duration-300 md:opacity-0 opacity-100",
              "group-hover:opacity-100 group-focus-visible:opacity-100"
            )}
          >
            <figcaption className="flex flex-col text-white max-w-full">
              <h3 className="font-semibold text-2xl truncate">{title}</h3>
              <p className="font-light leading-none truncate">{genre}</p>
            </figcaption>
          </div>
        </figure>
      </a>
    </Link>
  );
};
