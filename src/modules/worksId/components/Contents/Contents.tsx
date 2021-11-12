import clsx from "clsx";
import type { ComponentProps, VFC } from "react";

import { ConvertUrlsInTextToAnchorLinks } from "@/shared/components/basics/ConvertUrlsInTextToAnchorLinks";
import { Underlined } from "@/shared/components/basics/Underlined";
import type { Work } from "@/types/work";

import { ZoomImage } from "./ZoomImage";

type Props = {
  contents: Work["content"];
} & ComponentProps<"div">;

export const Contents: VFC<Props> = ({ contents, className, ...attrs }) => {
  return (
    <div className={clsx("flex flex-col space-y-16 md:space-y-24 mb-16 md:mb-24", className)} {...attrs}>
      {contents?.map((content, i) => (
        <section key={i.toString()} className="flex flex-col items-center space-y-5 md:space-y-6">
          <Underlined as="h3">{content.head}</Underlined>

          {content.images && !!content.images.length && (
            <div className="w-full flex space-x-2.5 overflow-x-auto max-w-full">
              {content.images?.map((image) => {
                return (
                  // TODO: 2枚以上でも対応する
                  <div key={image.src} className="w-4/5 flex-shrink-0 md:w-1/2 md:flex-shrink">
                    <ZoomImage src={image.src} alt={image.alt} />
                  </div>
                );
              })}
            </div>
          )}

          <div className="w-full bg-gray bg-opacity-70 px-5 py-4 sm:px-9 sm:py-8 rounded-lg">
            {content.description.map((p, i) => (
              <p
                key={i.toString()}
                className="break-words break-all font-light leading-loose sm:leading-loose text-white text-sm sm:text-base"
              >
                <ConvertUrlsInTextToAnchorLinks>{p}</ConvertUrlsInTextToAnchorLinks>
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
