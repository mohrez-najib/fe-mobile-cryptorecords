import axios from 'axios';
import { storage } from '../utils/storage';

const BASE_URL = 'http://localhost:3333';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
    
  config.headers = {
    ...config.headers,
    // Authorization: `Bearer  ${storage.get('@token')}`,
  };
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log('token expired');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
