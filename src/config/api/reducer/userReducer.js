/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  REGISTER, REGISTER_SUCCESS, LOGIN, LOGOUT,
} from '../types';

const initialAuthState = {
  token: null,
  name: '',
  isRegSukses: false,
};

export const authReducers = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
        name: action.name,
      };

    case REGISTER:
      return {
        ...state,
        isRegSukses: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegSukses: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
