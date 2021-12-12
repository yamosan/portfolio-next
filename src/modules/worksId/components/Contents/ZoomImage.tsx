import "react-medium-image-zoom/dist/styles.css";

import type { VFC } from "react";
import { useMemo } from "react";
import Zoom from "react-medium-image-zoom";

import { Image } from "@/shared/components/basics/Image";
import { useCurrentBreakpoint } from "@/shared/hooks/useCurrentBreakpoint";

type Props = {
  src: string;
  alt?: string;
};

// フォーカス時のスタイルが汚い
export const ZoomImage: VFC<Props> = ({ src, alt }) => {
  const { isSm, isMd } = useCurrentBreakpoint();

  const margin = useMemo(() => {
    let result = 10;
    if (isSm) {
      result = 50;
    } else if (isMd) {
      result = 120;
    }
    return result;
  }, [isSm, isMd]);

  return (
    <Zoom
      wrapStyle={{ width: "100%" }}
      zoomMargin={margin}
      overlayBgColorStart={"rgba(0, 0, 0, 0)"}
      overlayBgColorEnd={"rgba(0, 0, 0, 0.75)"}
    >
      <div className="w-full aspect-h-9 aspect-w-16 relative bg-grayDark rounded-lg overflow-hidden border border-white border-opacity-10">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
    </Zoom>
  );
};
