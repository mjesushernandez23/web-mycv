import { ScreenSizesType } from "@utils/interfaces/ui";
import { atom } from "recoil";

export interface MessageErrorAtomProps {
  statusCode: number;
  message: string;
}

export const sizeScreenAtom = atom<ScreenSizesType>({
  key: "sizeScreenAtom",
  default: null,
});

export const isLoadingAtom = atom<boolean>({
  key: "isLoadingAtom",
  default: false,
});

export const messageAlertAtom = atom<MessageErrorAtomProps>({
  key: "messageAlertAtom",
  default: {
    message: "",
    statusCode: 0,
  },
});
