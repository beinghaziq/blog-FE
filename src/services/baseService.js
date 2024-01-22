import axios from 'axios';

const apiService = () => {
  const headers = {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_API_KEY,
  };
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/',
    headers: headers,
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => response,
    (err) => {
      if (
        err.response.status === 401
      ) {
        console.log(err.response)
      }

      return Promise.reject(err);
    }
  );

  return instance;
};

export const baseService = apiService();
