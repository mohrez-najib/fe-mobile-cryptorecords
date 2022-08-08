import { AxiosError } from 'axios';
import axiosInstance from '../../../services/axios';
import { endpoints } from '../../../services/endpoints';
import { LoginValues, RegisterValues } from '../@types';

export const loginRequest = async (data: LoginValues) => {
  try {
    const { data: response } = await axiosInstance({
      method: 'POST',
      url: endpoints.login,
      data,
    });
    return response;
  } catch (error: any) {
    throw Error(error.response?.data?.message[0]);
  }
};

export const registerRequest = async (data: RegisterValues) => {
  try {
    const { data: response } = await axiosInstance({
      method: 'POST',
      url: endpoints.register,
      data,
    });
    return response;
  } catch (error : any) {
    
    throw Error(error.response?.data?.message[0]);
  }
};
