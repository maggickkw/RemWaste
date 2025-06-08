import Axios, {  AxiosError } from "axios";
import type { AxiosResponse, AxiosRequestConfig, } from "axios";
import { BaseURL } from "./baseurl";



const client = async (
  url: string,
  { data, method = "GET", ...customConfig }: AxiosRequestConfig = {}
) => {
  if (!url || typeof url !== "string") {
    throw new Error(`Invalid URL passed to client: ${url}`);
  }

  const axiosApi = Axios.create({
    baseURL: BaseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });


  try {
    if (method === "GET") {
      const result: AxiosResponse = await axiosApi.get(url, {
        ...customConfig,
      });
      return result?.data;
    } else if (method === "POST") {
      const result: AxiosResponse = await axiosApi.post(url, data, {
        ...customConfig,
      });
      return result?.data;
    } else {
      throw new Error(`Unsupported method: ${method}`);
    }
  } catch (error: AxiosError | unknown) {
    console.error(
      "Error during API request:",
      error instanceof AxiosError ? error.message : error
    );
    throw error;
  }
};

export default client;
