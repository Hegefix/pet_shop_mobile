import { actionTypes } from '@constants';

export const authWithPhoneAsync = phoneNumber => ({
  type: actionTypes.AUTH_WITH_PHONE_ASYNC,
  payload: phoneNumber,
});

export const authSetIsLoading = isLoading => ({
  type: actionTypes.AUTH_SET_IS_LOADING,
  payload: isLoading,
});

export const authSetError = error => ({
  type: actionTypes.AUTH_SET_ERROR,
  payload: error,
});
