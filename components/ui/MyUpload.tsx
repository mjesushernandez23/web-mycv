import { ChangeEvent, useState } from "react";
import { FormikHandlers } from "formik";
import Button from "@mui/material/Button";

interface Props {
  icon: JSX.Element;
  accept: string[];
  name: string;
  onChange: (values: FileList) => void;
  handleBlur: FormikHandlers["handleBlur"];
  error?: string;
  multiple?: boolean;
  label: string;
}

const MyUpload = (props: Props) => {
  const { icon, label, name, accept, multiple, onChange, error } = props;
  const [filesNames, setFilesNames] = useState<string[] | null>(null);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { files } = target;
    if (files === null) return;
    const nameFiles = Object.values(files).map(({ name }) => name);
    nameFiles.length === 0 ? setFilesNames(null) : setFilesNames(nameFiles);
    onChange(files);
  };

  return (
    <label htmlFor={`contained-button-file-${name}`} className="w-fit overflow-hidden">
      <input
        accept={`.${accept.join(",.")}`}
        id={`contained-button-file-${name}`}
        className="hidden"
        multiple
        type="file"
        onChange={handleChange}
      />
      <Button
        variant="outlined"
        className="max-w-full w-fit whitespace-nowrap overflow-x-hidden text-ellipsis "
        component="span"
      >
        {filesNames ? filesNames.join() : icon}
      </Button>
    </label>
  );
};

export default MyUpload;
