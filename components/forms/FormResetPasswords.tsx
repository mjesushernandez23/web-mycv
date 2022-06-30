import { useFormik } from "formik";
import MyInput from "@components/ui/MyInput";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { validResetPassword, isValidForm } from "@utils/validations";
import useAxios from "@hooks/useAxios";
import useAuth from "@hooks/useAuth";

interface ResetPasswordProps {
  code?: string;
}

const FormResetPasswords = ({ code }: ResetPasswordProps) => {
  const { axiosSimple } = useAxios();
  const { handleLogin } = useAuth();

  const { values, errors, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    ...validResetPassword,
    onSubmit: async values => {
      const payload = { ...values, code };
      const result = await axiosSimple({
        endPoint: "/auth/reset-password",
        method: "post",
        payload,
        messageSuccess: "Se actualizo la contraseña",
      });
      result ? handleLogin(result) : resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 mt-4 gap-4 w-2/3 mx-auto">
      <MyInput
        label="Nueva Contraseña*"
        name="password"
        placeholder="*******"
        type="password"
        value={values.password}
        error={errors.password}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <MyInput
        label="Confirma contraseña*"
        name="passwordConfirmation"
        placeholder="*******"
        type="password"
        value={values.passwordConfirmation}
        error={errors.passwordConfirmation}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <Button className="w-fit mx-auto" endIcon={<SendIcon />} type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default FormResetPasswords;
