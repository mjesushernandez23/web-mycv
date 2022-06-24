import TextField, { BaseTextFieldProps } from "@mui/material/TextField";
import { FormikHandlers } from "formik";

type conflictsTypes =
  | "value"
  | "inputRef"
  | "error"
  | "helperText"
  | "label"
  | "placeholder"
  | "name";

export interface MyInputBaseProps {
  label: string;
  placeholder: string;
}
interface Props extends Omit<BaseTextFieldProps, conflictsTypes>, MyInputBaseProps {
  name: string;
  error: string;
  value: string;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
}

const MyInput = (props: Props) => {
  const { name, value, placeholder, label, handleChange, handleBlur, error, ...propsTextField } =
    props;

  const trimValue = (v: string) => handleChange;

  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      error={!!error}
      helperText={error}
      {...propsTextField}
    />
  );
};

export default MyInput;
