import { AUTH_SET_IS_LOADING, AUTH_SET_ERROR } from '@constants';

const initialState = {
  isLoading: false,
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
    case AUTH_SET_ERROR: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
