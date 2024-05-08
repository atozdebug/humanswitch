import axios from "axios";

// Create an Axios instance
const api = axios.create({
  // baseURL: "https://chatbase-api-f742ef5dc0f5.herokuapp.com/api",
  baseURL: "http://127.0.0.1:5000/",

  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config: any) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default api;
