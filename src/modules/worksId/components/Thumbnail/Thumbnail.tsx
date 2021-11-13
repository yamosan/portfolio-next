import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import clsx from "clsx";
import type { ComponentProps, VFC } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

import { Image } from "@/shared/components/basics/Image";

type Props = {
  title: string;
  thumbnailUrl: string;
  youtubeId?: string;
} & ComponentProps<"div">;

export const Thumbnail: VFC<Props> = ({ title, thumbnailUrl, youtubeId, className }) => {
  return (
    <div
      className={clsx("relative aspect-h-9 aspect-w-16 rounded-lg border border-white border-opacity-10", className)}
    >
      {youtubeId ? (
        <div className="absolute top-0 left-0 m-0 w-full h-full">
          <LiteYouTubeEmbed id={youtubeId} title={title} />
        </div>
      ) : (
        <Image src={thumbnailUrl} alt={title} layout="fill" priority />
      )}
    </div>
  );
};
