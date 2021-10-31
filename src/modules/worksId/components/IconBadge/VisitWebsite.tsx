import Link from "next/link";
import type { VFC } from "react";

import { LinkIcon } from "@/shared/components/vectors/LinkIcon";

import { Base } from "./Base";

type Props = {
  href: string;
};

export const VisitWebsite: VFC<Props> = ({ href }) => {
  return (
    <Link href={href}>
      <a className="block">
        <Base label="Visit Website" icon={<LinkIcon width={18} height={18} />} />
      </a>
    </Link>
  );
};
