import type { VFC } from "react";
import reactStringReplace from "react-string-replace";

type Props = {
  children: string;
};

const regExp = /(https?:\/\/[\w!?/+\-_~;.,*&@#$%()'[\]]+)/g;

export const ConvertUrlsInTextToAnchorLinks: VFC<Props> = ({ children }) => {
  return (
    <>
      {reactStringReplace(children, regExp, (match, _i) => (
        <a href={match} className="underline">
          {match}
        </a>
      ))}
    </>
  );
};
