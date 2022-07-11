export type ScreenSizesType = "thumbnail" | "sm" | "md" | "lg" | "xl" | "2xl" | null;
import { MouseEvent, ChangeEvent } from "react";

export interface MyUploadProps {
  state: {
    listFiles: File[] | null;
    anchorEl: HTMLElement | null;
  };
  handles: {
    handleRemoveItem: (index: number) => void;
    handleClose: () => void;
    handleClick: (e: MouseEvent<HTMLElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}
