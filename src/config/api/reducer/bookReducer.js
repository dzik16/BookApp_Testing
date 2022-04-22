/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { BOOKS_RECOMMENDED, BOOKS_POPULAR, BOOKS_ID } from '../types';

const initialBookState = {
  booksRecommended: [],
  booksPopular: [],
  booksId: [],
};

export const dataReducers = (state = initialBookState, action) => {
  switch (action.type) {
    case BOOKS_RECOMMENDED:
      return {
        ...state,
        booksRecommended: action.payload,
      };
    case BOOKS_POPULAR:
      return {
        ...state,
        booksPopular: action.payload,
      };
    case BOOKS_ID:
      return {
        ...state,
        booksId: action.payload,
      };

    default:
      return state;
  }
};
