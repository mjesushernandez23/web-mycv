import { useFormik } from "formik";
import { registerSchema } from "@validations/registerValidation";
import MyInput from "@components/ui/MyInput";

interface Props {}

const Form = (props: Props) => {
  const { values, handleChange, handleBlur, handleReset, handleSubmit, errors } = useFormik({
    initialValues: {
      company: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <MyInput
        name="company"
        label="Compañía"
        placeholder="tu compañía"
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={values["company"]}
        error={errors["company"]}
      />
    </form>
  );
};

export default Form;
