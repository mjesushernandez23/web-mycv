import { loginValidation } from "@utils/validations";
import { LoginResponseProps } from "@interfaces/api";
import { useFormik } from "formik";
import useAxios from "@hooks/useAxios";
import MyInput from "@components/ui/MyInput";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import useAuth from "@hooks/useAuth";

const FormLogin = () => {
  const { axiosPublic } = useAxios();
  const { handleLogin } = useAuth();

  const { values, errors, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    ...loginValidation,
    onSubmit: async payload => {
      const result: LoginResponseProps | null = await axiosPublic({
        endPoint: "/auth/local",
        method: "post",
        payload,
      });

      result ? handleLogin(result) : resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-4">
      <MyInput
        error={errors.identifier}
        handleBlur={handleBlur}
        handleChange={handleChange}
        label="Correo electrónico*"
        name="identifier"
        placeholder="exaple@test.com"
        type="email"
        value={values.identifier}
      />
      <MyInput
        error={errors.password}
        handleBlur={handleBlur}
        handleChange={handleChange}
        label="Contraseña*"
        name="password"
        placeholder="********"
        type="password"
        value={values.password}
      />
      <div className="col-span-2 w-full flex justify-center">
        <Button variant="contained" type="submit" className="w-fit" endIcon={<SendIcon />}>
          Ingresar
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
