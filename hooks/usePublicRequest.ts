import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { isLoadingAtom, messageAlertAtom } from "@store/ui";
import { useSetRecoilState } from "recoil";
import { ErrorResponseProps } from "@utils/interfaces/api";

interface AxiosRequestProps extends Omit<AxiosRequestConfig, "headers" | "baseUrl" | "url"> {
  endPoint: string;
}

const URL_BASE = process.env.URL_BACKEND;

export default function usePublicRequest() {
  const setLoading = useSetRecoilState(isLoadingAtom);
  const setMessageError = useSetRecoilState(messageAlertAtom);

  const axiosRequest = async (props: AxiosRequestProps) => {
    const { endPoint, method = "get", ...restProps } = props;

    //    setLoading(true);
    const url = `${URL_BASE}${endPoint}`;

    return await axios({ url, method, ...restProps })
      .then(response => {
        return response.data;
      })
      .catch((err: AxiosError) => {
        const error = err.response;
        console.log(error);
        //setMessageError();
        return null;
      });
  };

  return {
    axiosRequest,
  };
}
