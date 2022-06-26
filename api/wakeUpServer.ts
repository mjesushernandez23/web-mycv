import axios from "axios";
import { API } from "@utils/constants";

export default async function wakeUpServer(): Promise<void> {
  const url = API;
  try {
    await axios({ url });
  } catch (error) {}
}
