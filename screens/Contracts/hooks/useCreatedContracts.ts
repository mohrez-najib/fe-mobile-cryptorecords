import { useQuery } from '@tanstack/react-query';
import { getCreatedContracts } from '../apis';
export const useCreatedContracts = () => {
  const { data, isLoading } = useQuery(
    ['createdContracts'],
    getCreatedContracts,
  );

  return {
    data,
    isLoading,
  };
};
