import {
  AUTH_BOOTSTRAP_ASYNC,
  AUTH_WITH_PHONE_ASYNC,
  AUTH_SET_IS_LOADING,
  AUTH_SET_IS_INITIALIZED,
  AUTH_SET_ERROR,
  AUTH_SET_USER,
} from '@actionTypes';

export const authBootsrapAsync = () => ({
  type: AUTH_BOOTSTRAP_ASYNC,
});

export const authWithPhoneAsync = phoneNumber => ({
  type: AUTH_WITH_PHONE_ASYNC,
  payload: phoneNumber,
});

export const authSetIsLoading = isLoading => ({
  type: AUTH_SET_IS_LOADING,
  payload: isLoading,
});

export const authSetIsInitialized = isInitialized => ({
  type: AUTH_SET_IS_INITIALIZED,
  payload: isInitialized,
});

export const authSetError = error => ({
  type: AUTH_SET_ERROR,
  payload: error,
});

export const authSetUser = user => ({
  type: AUTH_SET_USER,
  payload: user,
});
