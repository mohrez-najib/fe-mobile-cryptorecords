import { useMutation } from '@tanstack/react-query';
import { storage } from '../../../utils/storage';
import { LoginValues } from '../@types';
import { loginRequest } from '../apis';
export const useLogin = () => {
  const { mutate, isLoading } = useMutation(loginRequest, {
    onSuccess: (data) => {
      storage.set('@access_token', data.access_token);
      storage.set('@refresh_token', data.refresh_token);
    },
    onError: (error: any) => {
      alert(error.response.message);
    },
  });

  const onLogin = (values: LoginValues) => {
    mutate({ ...values });
  };
  return {
    onLogin,
    isLoading,
  };
};
