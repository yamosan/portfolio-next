import type { ReactNode, RefObject, VFC } from "react";
import { createContext, useContext } from "react";

type TRootRefContext = RefObject<HTMLElement>;

const RootRefContext = createContext<TRootRefContext>({} as TRootRefContext);

// Hooks
export const useRootRef = () => useContext(RootRefContext);

// Provider
const RootRefProvider: VFC<{
  rootRef: RefObject<HTMLElement>;
  children: ReactNode;
}> = ({ rootRef, children }) => {
  return <RootRefContext.Provider value={rootRef}>{children}</RootRefContext.Provider>;
};

export default RootRefProvider;
