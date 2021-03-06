import { KeysFormats } from "@utils/interfaces/api";
import { useSetRecoilState } from "recoil";
import { sizeScreenAtom } from "@store/uiAtoms";
import { useEffect } from "react";

export interface PropsQueriesRanges {
  id: KeysFormats;
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
  const setScreenResized = useSetRecoilState(sizeScreenAtom);
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
    setScreenResized(result?.id ?? null);
  };
}
