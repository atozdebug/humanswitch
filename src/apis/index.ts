import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzE3OTE0MSwianRpIjoiMTU3ZGJiYzMtOWRiNi00Yjg2LWJlYjUtODFiMzY3NGE3Mjc5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InN1cGVyYWRtaW5AZ21haWwuY29tIiwibmJmIjoxNzIzMTc5MTQxLCJjc3JmIjoiNjliYzM1ZWUtNWMwNi00MzI1LTgxZjAtYzU1NGExNjQ5N2IyIiwiZXhwIjoxNzIzMjY1NTQxLCJmaXJzdG5hbWUiOiJQcmluY2UiLCJsYXN0bmFtZSI6IlBhcmJoYWthciIsInBob25lX25vIjoiOTE5ODc2NTQzMjEiLCJyb2xlIjoiU3VwZXIgQWRtaW4iLCJjb21wYW55LW5hbWUiOiJVUyIsImluZHVzdHJ5IjoiRlIiLCJzZWN0b3IiOiJDQSIsImVtYWlsIjoic3VwZXJhZG1pbkBnbWFpbC5jb20iLCJpZCI6IjY2NzNjNDczNTEyMDFhYTQxY2UxYjRiMyIsInNlY3VyaXR5Ijoibm9uZSJ9.0TZUvcU2GAlVwmdMAa-pDhIs7cwO3tNTHfhV3gSfz0E',
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
