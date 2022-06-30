import { KeysFormats } from "@utils/interfaces/api";
import { atom } from "recoil";

export interface MessageErrorAtomProps {
  statusCode: number;
  message: string;
}

export const sizeScreenAtom = atom<KeysFormats | null>({
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

export const darkModeAtom = atom<boolean>({
  key: "darkModeAtom",
  default: false,
});
