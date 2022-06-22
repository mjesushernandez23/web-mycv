import { MessageErrorProps } from "@utils/interfaces/api";
import { ScreenSizesType } from "@utils/interfaces/ui";
import { atom } from "recoil";

export const sizeScreenAtom = atom<ScreenSizesType>({
  key: "sizeScreenAtom",
  default: null,
});

export const isLoadingAtom = atom<boolean>({
  key: "isLoadingAtom",
  default: false,
});

export const messageAlertAtom = atom<null | MessageErrorProps[]>({
  key: "messageAlertAtom",
  default: null,
});
