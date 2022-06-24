import { useFormik } from "formik";
import MyInput, { MyInputBaseProps } from "@components/ui/MyInput";
import Button from "@mui/material/Button";
import { nameFields, registerValidation } from "@utils/validations";
import useAxios from "@hooks/useAxios";

interface InputsProps extends MyInputBaseProps {
  name: nameFields;
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

const FormRegister = () => {
  const { axiosPublic } = useAxios();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    ...registerValidation,
    onSubmit: async payload => {
      const response = await axiosPublic({
        endPoint: "/auth/local/register",
        method: "post",
        payload,
      });
      console.log(response);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mt-6 justify-end">
      {inputsProps.map(({ name, ...restProps }, index) => (
        <MyInput
          key={`input${index}`}
          value={values[name]}
          error={errors[name] ?? ""}
          name={name}
          handleChange={handleChange}
          handleBlur={handleBlur}
          {...restProps}
        />
      ))}
      <div className="col-span-2 flex justify-end">
        <Button className="w-fit h-fit" size="large" variant="contained" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default FormRegister;
