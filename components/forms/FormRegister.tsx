import { useFormik } from "formik";
import MyInput, { MyInputBaseProps } from "@components/ui/MyInput";
import Button from "@mui/material/Button";
import { nameFieldsRegister, registerValidation } from "@utils/validations";
import useAxios from "@hooks/useAxios";

interface InputsProps extends MyInputBaseProps {
  name: nameFieldsRegister;
  type?: string;
}

const inputsProps: InputsProps[] = [
  { label: "Correo electrónico", placeholder: "user@example.com", name: "email", type: "email" },
  { label: "Nombre", placeholder: "Juan", name: "firstName" },
  { label: "Apellido", placeholder: "Perez", name: "lastName" },
  { label: "Compañía", placeholder: "Microsoft", name: "company" },
  { label: "Numero de teléfono", placeholder: "5555555555", name: "phoneNumber", type: "tel" },
  { label: "Contraseña", placeholder: "*********", name: "password", type: "password" },
];

interface FormRegisterProps {
  onClose: () => void;
}

const FormRegister = ({ onClose }: FormRegisterProps) => {
  const { axiosSimple } = useAxios();
  const { values, errors, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    ...registerValidation,
    onSubmit: async values => {
      const payload = {
        ...values,
        username: values.email,
      };
      const response = await axiosSimple({
        endPoint: "/auth/local/register",
        method: "post",
        payload,
        messageSuccess: "Revisa tu bandeja de entrada",
      });
      response && resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-6 justify-end">
      {inputsProps.map(({ name, ...restProps }, index) => (
        <MyInput
          key={`input${index}`}
          value={values[name]}
          error={errors[name]}
          name={name}
          handleChange={handleChange}
          handleBlur={handleBlur}
          {...restProps}
        />
      ))}
      <div className="col-span-2 flex flex-col items-center">
        <Button className="w-fit h-fit" size="large" variant="contained" type="submit">
          Enviar
        </Button>

        <Button className="mt-2" onClick={onClose} variant="text" LinkComponent="a" type="button">
          Inicia sesión
        </Button>
      </div>
    </form>
  );
};

export default FormRegister;
