import axios, { type AxiosRequestConfig } from "axios";

const baseURL = "/";
let authorization: string = "";

export default <D, R>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D>
) => {
  return axios<R, R, D>(url, {
    method: "POST",
    data,
    baseURL,
    headers: {
      Authorization: authorization,
      "Content-Type": "application/json",
    },
    ...config,
  });
};

export const setAuthorization = (tk: string) => {
  authorization = tk;
};
