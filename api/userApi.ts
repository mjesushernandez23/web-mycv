import axios from "axios";
import { UserInfoProps } from "@interfaces/api";
import { API } from "@utils/constants";
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
  } catch (error) {
    return null;
  }
}
