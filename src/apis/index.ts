import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

const token = localStorage.getItem('token');
export const axiosInstance = axios.create({
  baseURL: 'https://humanswitch-backend.onrender.com',
  headers: {
    Authorization: token,
  },
});

export const request = async (config: AxiosRequestConfig<unknown>) =>
  axiosInstance.request(config);
export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig<unknown>
): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(url, config);
};

export const post = async (
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig<unknown> | undefined
) => axiosInstance.post(url, data, config);

export const deleteData = async (
  url: string,
  config?: AxiosRequestConfig<unknown> | undefined
) => axiosInstance.delete(url, config);

export const patch = async (
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig<unknown> | undefined
) => axiosInstance.patch(url, data, config);
export const postForm = async (
  url: string,
  data?: FormData,
  config?: AxiosRequestConfig<unknown>
) => {
  return axiosInstance.post(url, data, {
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data', // Ensure the right Content-Type is used for FormData
      ...config?.headers,
    },
  });
};
