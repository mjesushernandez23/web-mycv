import axios, { AxiosRequestConfig } from "axios";
import { isLoadingAtom, messageAlertAtom } from "@store/uiAtoms";
import { useSetRecoilState } from "recoil";
import { ErrorResponseErrorProps } from "@utils/interfaces/api";
import { API } from "@utils/constants";
interface AxiosRequestProps
  extends Omit<AxiosRequestConfig, "headers" | "baseUrl" | "url" | "data"> {
  endPoint: string;
  payload?: {} | [];
  message?: string;
}

export default function useAxios() {
  const setLoading = useSetRecoilState(isLoadingAtom);
  const setMessageError = useSetRecoilState(messageAlertAtom);

  const axiosPublic = async (props: AxiosRequestProps) => {
    const { endPoint, method = "get", payload, message } = props;
    setLoading(true);
    const url = `${API}${endPoint}`;
    try {
      const { data } = await axios({ url, method, data: payload });
      message !== undefined
        ? (setLoading(true), setMessageError({ statusCode: 200, message }))
        : setLoading(false);
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { data, statusCode } = err.response?.data as ErrorResponseErrorProps;
        const message = data[0].messages[0].message;
        setMessageError({ message, statusCode });
      } else {
        console.log("otro error", err);
        setMessageError({ message: "Error desconocido", statusCode: 0 });
      }
      return null;
    }
  };

  return {
    axiosPublic,
  };
}
