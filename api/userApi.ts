import axios from "axios";
import { ErrorResponseErrorProps, UserInfoProps } from "@interfaces/api";
import { API } from "@utils/constants";
import { deleteToken, getToken } from "./localStorage";
export async function userMeApi(): Promise<UserInfoProps | null> {
  const token = getToken();
  if (!token) return null;
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
