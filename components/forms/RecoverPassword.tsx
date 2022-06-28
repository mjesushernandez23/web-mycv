import { useFormik } from "formik";
import { validRecoverPassword, isValidForm } from "@utils/validations";
import MyInput from "@components/ui/MyInput";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAxios from "@hooks/useAxios";

interface Props {
  onClose: () => void;
}

const RecoverPassword = ({ onClose }: Props) => {
  const { axiosSimple } = useAxios();
  const { values, errors, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    ...validRecoverPassword,
    onSubmit: async payload => {
      const result = await axiosSimple({
        method:"post",
        endPoint: "/auth/forgot-password",
        payload,
        messageSuccess: "Verifica tu bandeja de entrada",
      });

      result ? onClose() : resetForm();
    },
  });

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
        <Button type="submit" disabled={!isValidForm(errors)}>
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default RecoverPassword;
