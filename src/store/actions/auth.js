import {
  AUTH_WITH_PHONE_ASYNC,
  AUTH_SET_IS_LOADING,
  AUTH_SET_ERROR,
} from '@constants';

export const authWithPhoneAsync = phoneNumber => ({
  type: AUTH_WITH_PHONE_ASYNC,
  payload: phoneNumber,
});

export const authSetIsLoading = isLoading => ({
  type: AUTH_SET_IS_LOADING,
  payload: isLoading,
});

export const authSetError = error => ({
  type: AUTH_SET_ERROR,
  payload: error,
});
