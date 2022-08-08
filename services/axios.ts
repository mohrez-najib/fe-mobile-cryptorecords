import axios from 'axios';
import useUnAuthorize from '../screens/Auth/hooks/useUnAuthorize';
import { storage } from '../utils/storage';
import { endpoints } from './endpoints';

const { unAuthorize } = useUnAuthorize();
const BASE_URL = 'http://localhost:3333';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await storage.get('@access_token');
  console.log('config', config);
  if (config.url === endpoints.login || config.url === endpoints.register) {
    return config;
  } else {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      unAuthorize()
      console.log('token expired');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
