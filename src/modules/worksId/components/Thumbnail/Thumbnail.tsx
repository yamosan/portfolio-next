import clsx from "clsx";
import type { ComponentProps, VFC } from "react";

import { Image } from "@/shared/components/basics/Image";
import type { Work } from "@/types/work";

type Props = Pick<Work, "thumbnail" | "title"> & ComponentProps<"div">;

export const Thumbnail: VFC<Props> = ({ thumbnail, title, className }) => {
  const videoThumbnail = !!thumbnail.youtubeId;

  return (
    <div
      className={clsx("relative aspect-h-9 aspect-w-16 rounded-lg border border-white border-opacity-10", className)}
    >
      {videoThumbnail ? (
        <iframe
          src={`https://www.youtube.com/embed/${thumbnail.youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-0 left-0 m-0 w-full h-full"
        />
      ) : (
        <Image src={thumbnail.imageUrl} alt={title} layout="fill" />
      )}
    </div>
  );
};
