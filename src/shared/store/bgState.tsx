import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

type TState = number;

type TBgStateContext = {
  count: TState;
  setCount: Dispatch<SetStateAction<number>>;
};

const BgStateContext = createContext<TBgStateContext>({} as TBgStateContext);

// Hooks
export const useBgState = () => useContext(BgStateContext);

// Provider
const BgStateProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return <BgStateContext.Provider value={{ count, setCount }}>{children}</BgStateContext.Provider>;
};

export default BgStateProvider;
