import { API_ENDPOINT } from "@/helpers/constants";
import axios, { AxiosError, isAxiosError } from "axios";

// API GET Method
const apiGET = async ({ uri }: { uri: string }) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}${uri}`, {
      headers: { "ngrok-skip-browser-warning": true },
    });
    if (res.status == 200) return res.data;
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// API POST Method
const apiPOST = async ({ uri, data }: { uri: string; data: unknown }) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}${uri}`, { data });
    if (res.status == 200) return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return { status: axiosError.status, message: axiosError.message };
    }
    return [];
  }
};

export { apiGET, apiPOST };
