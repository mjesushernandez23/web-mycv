import { loginValidation } from "@utils/validations";
import { LoginResponseProps } from "@interfaces/api";
import { useFormik } from "formik";
import useAxios from "@hooks/useAxios";
import MyInput from "@components/ui/MyInput";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import useAuth from "@hooks/useAuth";

interface FormLoginProps {
  onRegister: () => void;
}

const FormLogin = ({ onRegister }: FormLoginProps) => {
  const { axiosSimple } = useAxios();
  const { handleLogin } = useAuth();

  const { values, errors, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    ...loginValidation,
    onSubmit: async payload => {
      const result: LoginResponseProps | null = await axiosSimple({
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
      <div className="col-span-2 w-full flex flex-col items-center">
        <Button variant="contained" type="submit" className="w-fit" endIcon={<SendIcon />}>
          Ingresar
        </Button>
        <Button className="mt-2 capitalize" LinkComponent="a" onClick={onRegister} variant="text" type="button">
          Regístrate
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
