import { useFormik } from "formik";
import { validationConferencieCreate } from "@utils/validations";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MyInput from "@components/ui/MyInput";
import MyUpload from "@components/ui/MyUpload";
import useMyUpload from "@hooks/useMyUpload";

import useAxios from "@hooks/useAxios";
interface Props {
  _id: number;
}

const FormCreateConference = ({ _id }: Props) => {
  const { axiosSimple } = useAxios();
  const { handleSubmitMyUpload, handlesMyUpload, stateMyUpload } = useMyUpload();
  const { values, errors, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    ...validationConferencieCreate,
    onSubmit: async values => {
      const files = await handleSubmitMyUpload();
      const payload = {
        users_permissions_user: _id,
        time: values.time,
      };
      /* const result = await axiosSimple({
        endPoint: "/conference-bookings",
        method: "post",
        payload,
        messageSuccess: "Se ha creado una cita",
        isAuth: true,
      }); */
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <MyInput
          name="time"
          type="datetime-local"
          value={values.time}
          error={errors.time}
          handleChange={handleChange}
          handleBlur={handleBlur}
          label={"Hora*"}
          placeholder={"Horario de la conferencia"}
        />
        <MyInput
          name="url"
          type="url"
          value={values.url}
          error={errors.url}
          handleChange={handleChange}
          handleBlur={handleBlur}
          label="Url de la conferencia"
          placeholder={"https://meet.com/code"}
        />
        <MyInput
          name="comments"
          value={values.comments}
          error={errors.comments}
          handleChange={handleChange}
          handleBlur={handleBlur}
          multiline
          label="Comentarios"
          placeholder="La hora es importante"
        />
        <Button className="w-fit mx-auto" type="submit" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </form>
      <div className="w-1/2 flex justify-center mx-auto">
        <MyUpload
          handles={handlesMyUpload}
          state={stateMyUpload}
          name="file"
          acceptFormat={["zip", "rar", "pdf"]}
          multiple
        />
      </div>
    </>
  );
};

export default FormCreateConference;
