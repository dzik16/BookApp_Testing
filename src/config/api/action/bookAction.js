import axios from 'axios';
import { BOOKS_API } from '../baseAPI';
import { BOOKS_RECOMMENDED, BOOKS_POPULAR, BOOKS_ID } from '../types';
import { setLoading, setRefresh } from './globalAction';
import { error } from '../../utils/message';

export const saveBookPopular = (data) => ({
  type: BOOKS_POPULAR,
  payload: data,
});

export const saveBookRecommended = (data) => ({
  type: BOOKS_RECOMMENDED,
  payload: data,
});

export const saveBookId = (data) => ({
  type: BOOKS_ID,
  payload: data,
});

export const getBooksRecommended = (token, batas) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios
      .get(BOOKS_API, {
        headers: { Authorization: `Bearer ${token}` },
        params: { batas },
      })
      .then((response) => {
        dispatch(setLoading(false));
        dispatch(setRefresh(false));
        dispatch(saveBookRecommended(response.data.results));
      });
  } catch (err) {
    error(err.message);
    dispatch(setRefresh(false));
  }
};

export const getBooksPopular = (token) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios
      .get(BOOKS_API, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        dispatch(setLoading(false));
        dispatch(setRefresh(false));
        dispatch(saveBookPopular(response.data.results));
      });
  } catch (err) {
    error(err.message);
    dispatch(setRefresh(false));
    dispatch(setLoading(false));
  }
};

export const getBooksId = (token, id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios
      .get(`${BOOKS_API}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        dispatch(saveBookId(response.data));
        dispatch(setRefresh(false));
        dispatch(setLoading(false));
      });
  } catch (err) {
    error(err.message);
    dispatch(setRefresh(false));
    dispatch(setLoading(false));
  }
};
