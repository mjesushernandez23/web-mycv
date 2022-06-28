import { useFormik } from "formik";
import { validationConferencieCreate } from "@utils/validations";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import MyInput from "@components/ui/MyInput";
import MyUpload from "@components/ui/MyUpload";
import { error } from "console";
interface Props {
  _id: string;
}

const FormCreateConference = ({ _id }: Props) => {
  const { values, errors, handleChange, handleBlur, handleSubmit, setFieldValue, resetForm } =
    useFormik({
      ...validationConferencieCreate,
      onSubmit: async values => {
        console.log(values);
      },
    });

  console.log(errors.file);

  return (
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
      <div className="w-1/2 flex justify-center mx-auto">
        <MyUpload
          label=""
          name="file"
          accept={["zip", "rar", "pdf"]}
          onChange={files => {
            setFieldValue("file", files);
          }}
          error={errors.file}
          multiple
          handleBlur={handleBlur}
          icon={<UploadFileIcon />}
        />
      </div>
      <Button className="w-fit mx-auto" type="submit" endIcon={<SendIcon />}>
        Enviar
      </Button>
      {/*  <MyInput
        inputProps={{
          className: "hidden",
        }}
        name="file"
        value={values.file}
        error={errors.file}
        type="file"
        handleChange={handleChange}
        handleBlur={handleBlur}
        label={"Archivos"}
        placeholder={""}
      > */}
    </form>
  );
};

export default FormCreateConference;
