import { ScreenSizesType } from "@utils/interfaces/ui";
import { atom } from "recoil";

export const sizeScreenAtom = atom<ScreenSizesType>({
  key: "sizeScreenAtom",
  default: null,
});
