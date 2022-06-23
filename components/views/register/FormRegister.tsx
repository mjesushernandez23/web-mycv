import { useForm } from "react-hook-form";

import UiInput from "@components/ui/UiInput";
import { Button } from "@mui/material";
import useRequestApi from "@hooks/usePublicRequest";

const FormRegister = () => {
  const { control, handleSubmit } = useForm();
  const { axiosRequest } = useRequestApi();

  const submitForm = async (values: {}) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="grid grid-cols-2 gap-4 mt-6 justify-end">
      <UiInput
        label="Correo electrónico"
        placeholder={`"user@example.com"`}
        name="email"
        type="email"
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
            message: "Email no es valido",
          },
        }}
      />
      <UiInput
        label="Nombre"
        placeholder={`"Juan"`}
        name="firstName"
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 3,
            message: "El nombre debe tener al menos 3 caracteres",
          },
        }}
      />
      <UiInput
        label="Apellido"
        placeholder={`"Perez"`}
        name="lastName"
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 3,
            message: "El apellido debe tener al menos 3 caracteres",
          },
        }}
      />
      <UiInput
        label="Compañía"
        placeholder={`"Microsoft"`}
        name="company"
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 3,
            message: "La compañía debe tener al menos 3 caracteres",
          },
        }}
      />
      <UiInput
        label="Numero de teléfono"
        placeholder={`Tu numero de teléfono`}
        name="numberPhone"
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 10,
            message: "Debe tener al menos 10 números",
          },
          maxLength: {
            value: 13,
            message: "Debe tener máximo 13 números",
          },
        }}
      />
      <UiInput
        label="Contraseña"
        placeholder="*********"
        name="password"
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres",
          },
        }}
      />
      <div className="col-span-2 flex justify-end">
        <Button className="w-fit h-fit" size="large" variant="contained" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default FormRegister;
