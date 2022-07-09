import { ResumeResponseProps } from "@utils/interfaces/api";
import { atom } from "recoil";

export const resumeAtom = atom<ResumeResponseProps | null>({
  key: "resumeAtom",
  default: null,
});
