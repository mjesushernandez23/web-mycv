import { string, object, date, mixed, InferType } from "yup";
import { phoneNumberReg, whiteSpaces } from "./regularExpressions";

const messageErrorWhiteSpaces = "Tienes espacios en blanco";

export const isValidForm = (errors: {}) => (Object.keys(errors).length === 0 ? true : false);

const validationEmail = string()
  .email("Ingresa un correo valido")
  .required("El correo es obligatorio");

const validationPassword = string()
  .min(6, "La contraseña debe tener al menos de 6 caracteres")
  .max(16, "La contraseña debe tener máximo 16 caracteres")
  .required("La contraseña es obligatoria");

export type nameFieldsRegister =
  | "email"
  | "firstName"
  | "lastName"
  | "company"
  | "phoneNumber"
  | "password";

export const registerValidation = {
  validationSchema: object({
    email: validationEmail,
    password: validationPassword,
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

export type nameFieldsLogin = "identifier" | "password";

export const loginValidation = {
  validationSchema: object({
    identifier: validationEmail,
    password: validationPassword,
  }),
  initialValues: {
    identifier: "",
    password: "",
  },
};

export const validRecoverPassword = {
  validationSchema: object({
    email: validationEmail,
  }),
  initialValues: {
    email: "",
  },
};

export const validResetPassword = {
  validationSchema: object({
    password: validationPassword,
    passwordConfirmation: string().test(
      "Contraseña iguales",
      "Las contraseñas deben de ser iguales",
      (value, ctx) => {
        return value === ctx.parent.password;
      }
    ),
  }),
  initialValues: {
    password: "",
    passwordConfirmation: "",
  },
};

export const validationConferencieCreate = {
  validationSchema: object({
    time: date()
      .min(new Date(), "La fecha no puede ser anterior")
      .required("Es obligatorio una fecha y hora"),
    url: string().url().notRequired(),
    comments: string().min(8, "Mínimo 8 caracteres").optional(),
    file: mixed()
      .test("fileType", "Formatos admitidos zip,rar y pdf", (value: FileList) => {
        if (value === undefined) return true;
        return Object.entries(value).every(([, key]) => {
          return /[zip|pdf|rar]$/.test(key.type);
        });
      })
      .optional(),
  }),
  initialValues: {
    time: new Date().toISOString().slice(0, -8),
    url: "",
    comments: "",
    file: undefined,
  },
};
