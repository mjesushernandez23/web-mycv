import { ChangeEvent, useState, MouseEvent } from "react";
import uploadApi from "@api/uploadApi";

export default function useMyUpload() {
  const [listFiles, setListFiles] = useState<File[] | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleRemoveItem = (index: number) => {
    if (listFiles === null) return;
    const newListFiles = listFiles.filter((v, i) => i !== index);
    newListFiles.length === 0
      ? (setListFiles(null), setAnchorEl(null))
      : setListFiles(newListFiles);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = ({ currentTarget }: MouseEvent<HTMLElement>) => {
    setAnchorEl(currentTarget);
  };
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { files } = target;
    console.log(target);

    if (files === null || files.length === 0) {
      setListFiles(null);
      return;
    }
    const arrayFiles = Object.values(files);
    setListFiles(arrayFiles);
  };

  const handleSubmitMyUpload = async () => {
    if (listFiles === null) return;
    console.log(listFiles);
    const result = await uploadApi(listFiles);
  };

  return {
    handleSubmitMyUpload,
    stateMyUpload: {
      listFiles,
      anchorEl,
    },
    handlesMyUpload: {
      handleRemoveItem,
      handleClose,
      handleClick,
      handleChange,
    },
  };
}
