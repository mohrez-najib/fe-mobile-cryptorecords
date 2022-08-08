import { RegisterOptions } from 'react-hook-form';
import { helperTexts } from '../helperTexts';

export const registerRules: { [k: string]: RegisterOptions } = {
  firstName: {
    required: {
      value: true,
      message: helperTexts.required('Firstname'),
    },
  },
  lastName: {
    required: {
      value: true,
      message: helperTexts.required('Lastname'),
    },
  },
  email: {
    required: {
      value: true,
      message: helperTexts.required('Email'),
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email',
    },
  },
  password: {
    required: {
      value: true,
      message: helperTexts.required('Password'),
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: helperTexts.required('Confirm password'),
    },
  },
};
