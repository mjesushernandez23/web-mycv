import axios, { AxiosRequestConfig } from "axios";
import { isLoadingAtom, messageAlertAtom } from "@store/uiAtoms";
import { useSetRecoilState } from "recoil";
import { ErrorResponseErrorProps } from "@utils/interfaces/api";
import { API } from "@utils/constants";
import { getToken } from "@api/localStorage";

interface AxiosPublicProps
  extends Omit<AxiosRequestConfig, "headers" | "baseUrl" | "url" | "data"> {
  endPoint: string;
  payload?: {} | [];
  messageSuccess?: string;
  messageError?: string;
  isAuth?: boolean;
}

export default function useAxios() {
  const setLoading = useSetRecoilState(isLoadingAtom);
  const setMessageAlert = useSetRecoilState(messageAlertAtom);

  const axiosSimple = async (props: AxiosPublicProps) => {
    const {
      endPoint,
      method = "get",
      payload,
      messageSuccess,
      messageError,
      isAuth = false,
    } = props;

    setLoading(true);
    const url = `${API}${endPoint}`;
    const headers = isAuth ? { Authorization: `Bearer ${getToken()}` } : undefined;
    try {
      const { data } = await axios({ url, method, data: payload, headers });
      messageSuccess
        ? setMessageAlert({ statusCode: 200, message: messageSuccess })
        : setLoading(false);
      return data;
    } catch (err) {
      if (messageError) {
        setMessageAlert({ message: messageError, statusCode: 400 });
      } else if (axios.isAxiosError(err)) {
        const { data, statusCode } = err.response?.data as ErrorResponseErrorProps;
        const message = data[0].messages[0].message;
        setMessageAlert({ message, statusCode });
      } else {
        setMessageAlert({ message: "Error desconocido", statusCode: 0 });
      }
      console.log(err);
      return null;
    }
  };

  return {
    axiosSimple,
  };
}
