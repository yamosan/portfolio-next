import clsx from "clsx";
import type { ComponentProps, VFC } from "react";
import { IconContext } from "react-icons";
import { SiGithub, SiQiita, SiTwitter, SiZenn } from "react-icons/si";

import { ExternalLink } from "@/shared/components/basics/ExternalLink";

const SNS = [
  {
    name: "github",
    href: "https://github.com/yamosan",
    icon: <SiGithub />,
  },
  {
    name: "zenn",
    href: "https://zenn.dev/yamo",
    icon: <SiZenn />,
  },
  {
    name: "qiita",
    href: "https://qiita.com/yamo",
    icon: <SiQiita />,
  },
  {
    name: "twitter",
    href: "https://twitter.com/tokage___sippo",
    icon: <SiTwitter />,
  },
];

type Props = ComponentProps<"ul">;

export const SnsList: VFC<Props> = ({ className, ...attrs }) => {
  return (
    <IconContext.Provider value={{ color: "white", style: { height: "24px", width: "24px" } }}>
      <ul className={clsx("flex space-x-4", className)} {...attrs}>
        {SNS.map(({ name, href, icon }) => (
          <li key={name}>
            <ExternalLink
              href={href}
              className={clsx("block rounded-md p-1.5", "transition duration-200 transform scale-100 hover:scale-125")}
              aria-label={name}
            >
              {icon}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </IconContext.Provider>
  );
};
