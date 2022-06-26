import { useFormik } from "formik";
import { rememberPassword, isValidForm } from "@utils/validations";
import MyInput from "@components/ui/MyInput";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

interface Props {}

const RememberPassword = (props: Props) => {
  const { values, errors, handleBlur, handleChange, handleSubmit, resetForm, isValid, dirty } =
    useFormik({
      ...rememberPassword,
      onSubmit: async () => {
        console.log("valido");
      },
    });

  console.log(isValidForm(errors));

  return (
    <form onSubmit={handleSubmit} className="m-4">
      <Typography variant="h6" align="center">
        Recuerda tu contraseña
      </Typography>
      <MyInput
        className="my-4"
        name="email"
        label="Correo electrónico"
        placeholder="example@test.com"
        value={values.email}
        error={errors.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <div className="w-full flex justify-center">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default RememberPassword;
