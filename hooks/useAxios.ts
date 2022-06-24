import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { isLoadingAtom, messageAlertAtom } from "@store/ui";
import { useSetRecoilState } from "recoil";
import { ErrorResponseProps } from "@utils/interfaces/api";

interface AxiosRequestProps
  extends Omit<AxiosRequestConfig, "headers" | "baseUrl" | "url" | "data"> {
  endPoint: string;
  payload?: {} | [];
}

const URL_BASE = process.env.URL_BACKEND;

export default function useAxios() {
  const setLoading = useSetRecoilState(isLoadingAtom);
  const setMessageError = useSetRecoilState(messageAlertAtom);

  const axiosPublic = async (props: AxiosRequestProps) => {
    const { endPoint, method = "get", payload } = props;

    //    setLoading(true);
    const url = `${URL_BASE}${endPoint}`;
    try {
      const { data } = await axios({ url, method, data: payload });
      console.log(data);
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err.response?.data as AxiosError;
        console.log("axiosErro", error);
      } else {
        console.log("errorSimple", err);
      }
      return null;
    }
  };

  return {
    axiosPublic,
  };
}
