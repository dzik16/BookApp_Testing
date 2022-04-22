/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { LOADING, REFRESH, INTERNET } from '../types';

const initialGlobalState = {
  isLoading: false,
  isRefresh: false,
  isInternet: true,
};

export const globalReducers = (state = initialGlobalState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REFRESH:
      return {
        ...state,
        isRefresh: action.payload,
      };
    case INTERNET:
      return {
        ...state,
        isInternet: action.payload,
      };
    default:
      return state;
  }
};
