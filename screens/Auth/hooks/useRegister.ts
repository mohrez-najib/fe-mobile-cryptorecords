import { useMutation } from '@tanstack/react-query';
import { RegisterValues } from '../@types';
import { registerRequest } from '../apis';
export const useRegister = () => {
  const { mutate, isLoading } = useMutation(registerRequest, {
    onSuccess: (data) => {
    },
    onError: (error: any) => {
      alert(error);
    },
  });

  const onRegister = (values: RegisterValues) => {
    mutate({ ...values });
  };
  return {
    onRegister,
    isLoading,
  };
};
