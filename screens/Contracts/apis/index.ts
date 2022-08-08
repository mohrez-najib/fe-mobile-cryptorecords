import { AxiosError } from 'axios';
import axiosInstance from '../../../services/axios';
import { endpoints } from '../../../services/endpoints';

export const getCreatedContracts = async () => {
  try {
    const { data: response } = await axiosInstance({
      method: 'GET',
      url: endpoints.createdContracts,
    });
    console.log('response' , response);
    
    return response;
  } catch (error: any) {
    throw Error(error.response?.data?.message[0]);
  }
};

export const getPartiesCntract = async () => {
  try {
    const { data: response } = await axiosInstance({
      method: 'GET',
      url: endpoints.register,
    });
    return response;
  } catch (error : any) {
    throw Error(error.response?.data?.message[0]);
  }
};
