import { ChangeEvent } from "react";
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

interface Props
  extends Omit<UseControllerProps, "defaultValue" | "shouldUnregister">,
    Omit<BaseTextFieldProps, conflictsTypes> {
  label: string;
  placeholder: string;
}

const UiInput = (props: Props) => {
  const { name, control, rules, placeholder, label, ...textFieldProps } = props;

  const {
    field: { ref, onChange, ...restField },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    console.log(value);
  };

  const isRequerid = rules !== undefined;

  return (
    <TextField
      label={`${label}${isRequerid ? "*" : ""}`}
      placeholder={placeholder}
      inputRef={ref}
      error={error !== undefined}
      onChange={handleChange}
      helperText={
        isRequerid && error?.type === "required" ? `El campo es obligatorio` : error?.message
      }
      {...restField}
      {...textFieldProps}
    />
  );
};

export default UiInput;
