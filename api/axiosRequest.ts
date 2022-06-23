import axios, { AxiosError } from "axios";

type methods = "get" | "post" | "delete" | "put";

interface AxiosSimpleProps {
  endPoint: string;
  method?: methods;
  payload?: {};
}

const URL_BACKEND = process.env.URL_BACKEND;

export async function axiosSimple(props: AxiosSimpleProps) {
  const { endPoint, method = "get", payload } = props;
  const url = `${URL_BACKEND}${endPoint}`;

  try {
    const response = await axios({ url, method, data: payload });
    return response.data;
  } catch (err) {
    if (!axios.isAxiosError(err)) return null;
    const error = err.response?.data as AxiosError;
    console.log(error);
    return error;
  }
}
