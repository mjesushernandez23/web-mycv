import { atom } from "recoil";
import { UserInfoProps } from "@interfaces/api";

export const userInfoAtom = atom<UserInfoProps | null>({
  key: "userInfoAtom",
  default: null,
});
