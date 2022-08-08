// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { storage } from '../../../utils/storage';

export const useUnAuthorize = () => {
//   const navigation = useNavigation();
  const unAuthorize = async () => {
    await storage.clear();
    // navigation.navigate('Login');
  };
  return {
    unAuthorize,
  };
};

export default useUnAuthorize;
