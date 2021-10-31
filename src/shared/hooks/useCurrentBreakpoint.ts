import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export const useCurrentBreakpoint = () => {
  const [isSm, isMd, isLg] = useMediaQuery(["(min-width: 640px)", "(min-width: 768px)", "(min-width: 1024px)"]);
  return { isSm, isMd, isLg };
};
