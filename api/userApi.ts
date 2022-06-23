import { axiosSimple } from "./axiosRequest";

export async function registerUserApi(values: {}) {
  const result = await axiosSimple({
    endPoint: "auth/local/register",
    method: "post",
    payload: values,
  });
}
