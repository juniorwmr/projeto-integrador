import { toast } from 'react-toastify';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import config from '../config';
import { getToken, logout } from '../services/auth';

const api = axios.create({
  baseURL: config.API_URL
});

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const configuration = config;
    const token = getToken();

    if (token && configuration?.headers) {
      configuration.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    console.log('error requisição');
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const { response } = error;

    if (error.message === 'Network Error') {
      return toast.error(
        'Opss... Não detectamos nenhuma conexão com internet, logue-se novamente.'
      );
    }

    if (error.code === 'ECONNABORTED') {
      return toast.error(
        'Opss... Detectamos uma lentidão na sua conexão. Por favor, tente novamente.'
      );
    }

    if (response?.status === 401) {
      logout();
      return Promise.reject(error);
    }

    if (response?.status !== 401 && response?.data?.errors?.length) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export { api };
