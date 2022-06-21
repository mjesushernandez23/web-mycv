import { ScreenSizesType } from "@utils/interfaces/ui";
import { useSetRecoilState } from "recoil";
import { sizeScreenAtom } from "@store/ui";
import { useEffect } from "react";

export interface PropsQueriesRanges {
  id: ScreenSizesType;
  value: number;
}

const queriesRanges: PropsQueriesRanges[] = [
  { id: "sm", value: 400 },
  { id: "md", value: 768 },
  { id: "lg", value: 1024 },
  { id: "xl", value: 1280 },
  { id: "2xl", value: 2560 },
];

export default function useResizeScreen(): void {
  const setScreenRisize = useSetRecoilState(sizeScreenAtom);
  /* eslint-disable */
  useEffect(() => {
    handleScreen();
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);
  /* eslint-enable */

  const handleScreen = (): void => {
    const withSize: number = window.innerWidth;
    const result = queriesRanges.find(({ value }) => value >= withSize);
    setScreenRisize(result?.id ?? null);
  };
}
