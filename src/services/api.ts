import Axios from "axios";
import { CONSTANT } from "../env";

interface Config {
  token: string;
  fullResponse?: boolean;
}

export async function apiGet(
  endpoint: string,
  { token, fullResponse = false }: Config
) {
  Axios.interceptors.request.use((config) => {
    if (token !== "") config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  try {
    const res = await Axios.get(CONSTANT.API.HOST + endpoint);
    return fullResponse ? res : res.data["hydra:member"] ?? res.data;
  } catch (err) {
    return null;
  }
}

export async function apiPost(endpoint: string, data: any, apiConfig: Config) {
  Axios.interceptors.request.use((config) => {
    if (apiConfig.token !== "")
      config.headers.Authorization = `Bearer ${apiConfig.token}`;
    return config;
  });

  try {
    const res = await Axios.post(CONSTANT.API.HOST + endpoint, data);
    return res;
  } catch (err) {
    // const _error = JSON.parse(err.response.request.responseText);
    return null;
  }
}
