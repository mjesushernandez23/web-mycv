import type { NextPage } from "next";
import { string, object } from "yup";
import { useFormik } from "formik";
import MyInput from "@components/ui/MyInput";
import { Button } from "@mui/material";

const initialValues = {
  firstName: "",
  lastName: "",
};

const validationSchema = object({
  firstName: string()
    .required("error")
    .matches(/^\w+\s?\w+$/g, "eror"),

  lastName: string().required("requerido"),
});

const TestForm: NextPage = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: v => {
      console.log(v);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-6">
      <MyInput
        name="firstName"
        placeholder="example"
        label=""
        value={values.firstName}
        error={errors.firstName ?? ""}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <MyInput
        name="lastName"
        placeholder="example"
        label=""
        value={values.lastName}
        error={errors.lastName ?? ""}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Test
      </Button>
    </form>
  );
};

export default TestForm;
