import React from "react";
import TextField from "@mui/material/TextField";
import { FormikHandlers } from "formik";

interface Props {
  name: string;
  value: string;
  label: string;
  placeholder: string;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  error?: string;
}

const MyInput = (props: Props) => {
  const { name, value, label, placeholder, error, handleChange, handleBlur } = props;
  console.log("er",error)

  return (
    <TextField
      value={value}
      name={name}
      label={label}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!error}
    />
  );
};

export default MyInput;
