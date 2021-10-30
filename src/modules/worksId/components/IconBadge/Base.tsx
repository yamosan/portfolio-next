import clsx from "clsx";
import type { ReactNode, VFC } from "react";

type Props = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

export const Base: VFC<Props> = ({ label, icon, className }) => {
  return (
    <div
      className={clsx(
        "inline-flex items-center border rounded-md py-1.5 px-3 bg-gray bg-opacity-70 border-white border-opacity-30",
        "transition duration-200 hover:filter hover:brightness-125",
        className
      )}
    >
      {icon}
      <span className="text-white text-xs ml-2.5 w-max">{label}</span>
    </div>
  );
};
