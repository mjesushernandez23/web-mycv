import axios from "axios";
import { API } from "@utils/constants";
import { ResumeResponseProps } from "@interfaces/api";

export default async function getMyCvApi(): Promise<ResumeResponseProps | null> {
  const url = `${API}/resume`;
  try {
    const { data } = await axios({ url });
    return data;
  } catch (error) {
    return null;
  }
}
