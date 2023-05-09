import axios, { type AxiosRequestConfig } from "axios";

const baseURL = "/";

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
      Authorization: "",
      "Content-Type": "application/json",
    },
    ...config,
  });
};
