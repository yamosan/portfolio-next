import Link from "next/link";
import type { VFC } from "react";

import { GitHubIcon } from "@/shared/components/vectors/GitHubIcon";

import { Base } from "./Base";

type Props = {
  href: string;
};

export const ViewSource: VFC<Props> = ({ href }) => {
  return (
    <Link href={href}>
      <a className="block">
        <Base label="View Source" icon={<GitHubIcon width={16} height={16} />} />
      </a>
    </Link>
  );
};
