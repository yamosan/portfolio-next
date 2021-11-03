import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type Props = {
  onClick: () => void;
  buttonRole: "open" | "close";
} & ComponentPropsWithoutRef<"button">;

export const Hamburger = forwardRef<HTMLButtonElement, Props>(
  ({ onClick, buttonRole = "open", className, ...attrs }, ref) => {
    const isOpen = buttonRole === "open";
    return (
      <button
        onClick={onClick}
        className={clsx("w-10 h-10 relative text-white flex justify-center items-center", className)}
        ref={ref}
        {...attrs}
      >
        <div aria-hidden={true}>
          <div className="block w-5">
            <div
              aria-hidden="true"
              className={clsx(
                "absolute h-0.5 w-5 rounded bg-current transform",
                "transition duration-500 ease-in-out",
                {
                  "rotate-45": !isOpen,
                  "translate-y-1.5": isOpen,
                }
              )}
            ></div>
            <div
              aria-hidden="true"
              className={clsx(
                "absolute h-0.5 w-5 rounded bg-current transform",
                "transition duration-500 ease-in-out",
                {
                  "opacity-0": !isOpen,
                }
              )}
            ></div>
            <div
              aria-hidden="true"
              className={clsx(
                "absolute h-0.5 w-5 rounded bg-current transform",
                "transition duration-500 ease-in-out",
                {
                  "-rotate-45": !isOpen,
                  "-translate-y-1.5": isOpen,
                }
              )}
            ></div>
          </div>
          <span className="sr-only">{isOpen ? "Open" : "Close"}</span>
        </div>
      </button>
    );
  }
);

Hamburger.displayName = "Hamburger";
