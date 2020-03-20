import {
  AUTH_SET_IS_LOADING,
  AUTH_SET_IS_INITIALIZED,
  AUTH_SET_ERROR,
  AUTH_SET_USER,
} from '@actionTypes';

const initialState = {
  user: null,
  isLoading: false,
  isInitialized: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case AUTH_SET_IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case AUTH_SET_IS_INITIALIZED: {
      return {
        ...state,
        isInitialized: payload,
      };
    }
    case AUTH_SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    case AUTH_SET_USER: {
      return {
        ...state,
        user: payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
