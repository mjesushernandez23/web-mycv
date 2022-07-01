import axios from "axios";
import { ErrorResponseErrorProps, UserInfoProps } from "@interfaces/api";
import { API } from "@utils/constants";
import { deleteToken } from "./localStorage";
export async function userMeApi(token: string): Promise<UserInfoProps | null> {
  const url = `${API}/users/me`;
  try {
    const { data } = await axios({
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const { statusCode } = err.response?.data as ErrorResponseErrorProps;
      statusCode === 401 && deleteToken();
    }
    return null;
  }
}
