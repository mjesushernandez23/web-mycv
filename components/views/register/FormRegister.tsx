import { FieldValues, useForm } from "react-hook-form";
import { RegisterUserProps } from "@utils/interfaces/api";
import UiInput from "@components/ui/UiInput";
import { Button } from "@mui/material";
import useRequestApi from "@hooks/usePublicRequest";

const FormRegister = () => {
  const { control, handleSubmit } = useForm();
  const { axiosRequest } = useRequestApi();

  const submitForm = async (values: RegisterUserProps | FieldValues) => {
    const result = await axiosRequest({ endPoint: "auth/local/register", method: "post", data: values });
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="grid grid-cols-2 gap-4 mt-6 justify-end">
      <UiInput
        label="Nombre de usuario*"
        placeholder={`"Reclutador chevere"`}
        controllerProps={{
          name: "username",
          control,
          rules: {
            minLength: {
              value: 6,
              message: "El nombre de usuario debe tener al menos 6 caracteres",
            },
          },
        }}
      />
      <UiInput
        label="Correo electrónico*"
        placeholder={`"user@example.com"`}
        controllerProps={{
          name: "email",
          control,
          rules: {
            pattern: {
              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
              message: "Email no es valido",
            },
          },
        }}
        textFieldProps={{ type: "email" }}
      />
      <UiInput
        label="Nombre*"
        placeholder={`"Juan"`}
        controllerProps={{
          name: "firstName",
          control,
          rules: {
            required: "El nombre es obligatorio",
          },
        }}
      />
      <UiInput
        label="Apellido*"
        placeholder={`"Perez"`}
        controllerProps={{
          name: "lastName",
          control,
          rules: {
            required: "El nombre es obligatorio",
          },
        }}
      />
      <UiInput
        label="Compañía*"
        placeholder={`"Microsoft"`}
        controllerProps={{
          name: "company",
          control,
          rules: {
            required: "La compañía es obligatoria",
          },
        }}
      />
      <UiInput
        label="Numero de teléfono*"
        placeholder={`Tu numero de teléfono`}
        controllerProps={{
          name: "numberPhone",
          control,
          rules: {
            minLength: {
              value: 10,
              message: "Debe tener al menos 10 números",
            },
            maxLength: {
              value: 13,
              message: "Debe tener máximo 13 números",
            },
          },
        }}
      />
      <UiInput
        label="Contraseña*"
        placeholder="*********"
        controllerProps={{
          name: "password",
          control,
          rules: {
            required: true,
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
          },
        }}
        textFieldProps={{ type: "password" }}
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
