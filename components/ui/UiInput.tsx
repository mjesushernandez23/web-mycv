import TextField, { BaseTextFieldProps } from "@mui/material/TextField";
import { useController, UseControllerProps } from "react-hook-form";

type conflictsTypes =
  | "value"
  | "inputRef"
  | "error"
  | "helperText"
  | "label"
  | "placeholder"
  | "onChange"
  | "onBlur"
  | "name";

interface Props {
  label: string;
  placeholder: string;
  controllerProps: UseControllerProps;
  textFieldProps?: Omit<BaseTextFieldProps, conflictsTypes>;
}

const UiInput = (props: Props) => {
  const { label, placeholder, controllerProps, textFieldProps } = props;

  const {
    field: { ref, value, ...restField },
    fieldState: { error },
  } = useController(controllerProps);

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value ?? ""}
      inputRef={ref}
      error={error !== undefined}
      helperText={error?.message}
      {...restField}
      {...textFieldProps}
    />
  );
};

export default UiInput;
