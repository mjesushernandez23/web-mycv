import { string, object } from "yup";
import { phoneNumberReg, whiteSpaces } from "./regularExpressions";

const messageErrorWhiteSpaces = "Tienes espacios en blanco";

export const registerValidation = {
  validationSchema: object({
    email: string().email("Ingresa un correo valido").required("El correo es obligatorio"),
    password: string()
      .min(6, "La contraseña debe tener al menos de 6 caracteres")
      .max(16, "La contraseña debe tener máximo 16 caracteres")
      .required("La contraseña es obligatoria"),
    company: string()
      .min(3, "La compañía debe tener al menos 3 caracteres")
      .max(16, "La compañía debe tener máximo 16 caracteres")
      .matches(whiteSpaces, messageErrorWhiteSpaces)
      .required("La compañía es requerida"),
    firstName: string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(16, "El nombre debe tener máximo 16 caracteres")
      .matches(whiteSpaces, messageErrorWhiteSpaces)
      .required("El nombre es obligatorio"),
    lastName: string()
      .min(3, "El apellido debe tener al menos 3 caracteres")
      .max(16, "El apellido debe tener máximo 16 caracteres")
      .matches(whiteSpaces, messageErrorWhiteSpaces)
      .required("obligatorio"),
    phoneNumber: string()
      .max(13, "El numero debe tener máximo 12 dígitos")
      .matches(phoneNumberReg, "Ingresa unn numero de teléfono valido")
      .required("obligatorio"),
  }),
  initialValues: {
    email: "",
    password: "",
    company: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  },
};

export type nameFields =
  | "email"
  | "firstName"
  | "lastName"
  | "company"
  | "phoneNumber"
  | "password";
