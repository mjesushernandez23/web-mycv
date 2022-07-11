import axios from "axios";
import { API } from "@utils/constants";
import { getToken } from "./localStorage";

export default async function uploadApi(files: File[]) {
  const url = `${API}/upload/`;
  const token = getToken();
  if (!token) return null;

  const form = new FormData();

  for (const file of files) {
    form.append("files", file);
  }

  try {
    const { data } = await axios({
      method: "post",
      url,
      data: form,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
}
