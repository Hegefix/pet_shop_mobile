import { actionTypes } from '@constants';

const initialState = {
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionTypes.AUTH_SET_IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case actionTypes.AUTH_SET_ERROR: {
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
