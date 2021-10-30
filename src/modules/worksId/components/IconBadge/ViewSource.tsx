import type { VFC } from "react";

import { GitHubIcon } from "@/shared/components/vectors/GitHubIcon";

import { Base } from "./Base";

export const ViewSource: VFC = () => {
  return <Base label="View Source" icon={<GitHubIcon width={16} height={16} />} />;
};
