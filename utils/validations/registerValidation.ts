import { string, object } from "yup";

import { phoneNumberReg } from "@validations/regularExpressions";

export const registerSchema = object({
  email: string().email("Enter a valid email").required("Email is required"),
  password: string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  company: string().min(8, "mínimo debe tener 8 caracteres").required("La compañía es requerida"),
  firstName: string().required("sd"),
  lastName: string().required("obligatorio"),
  phoneNumber: string()
    .matches(phoneNumberReg, "Es necesario un numero de teléfono")
    .required("obligatorio"),
});
