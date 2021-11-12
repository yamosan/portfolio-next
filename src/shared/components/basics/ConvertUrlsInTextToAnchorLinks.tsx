import type { VFC } from "react";
import reactStringReplace from "react-string-replace";

import { ExternalLink } from "./ExternalLink";

type Props = {
  children: string;
};

const regExp = /(https?:\/\/[\w!?/+\-_~;.,*&@#$%()'[\]]+)/g;

export const ConvertUrlsInTextToAnchorLinks: VFC<Props> = ({ children }) => {
  return (
    <>
      {reactStringReplace(children, regExp, (match, _i) => (
        <ExternalLink href={match} className="underline">
          {match}
        </ExternalLink>
      ))}
    </>
  );
};
