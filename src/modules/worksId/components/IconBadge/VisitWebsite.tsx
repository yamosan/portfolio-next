import type { VFC } from "react";

import { LinkIcon } from "@/shared/components/vectors/LinkIcon";

import { Base } from "./Base";

export const VisitWebsite: VFC = () => {
  return <Base label="Visit Website" icon={<LinkIcon width={18} height={18} />} />;
};
