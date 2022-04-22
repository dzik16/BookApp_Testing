import axios from 'axios';
import { LOGIN_API, REGISTER_API } from '../baseAPI';

import {
  REGISTER, REGISTER_SUCCESS, LOGIN, LOGOUT,
} from '../types';
import { setLoading } from './globalAction';
import { error } from '../../utils/message';

export const register = () => ({
  type: REGISTER,
});

export const login = (token, name) => ({
  type: LOGIN,
  payload: token,
  name,
});

export const regSukses = (value) => ({
  type: REGISTER_SUCCESS,
  payload: value,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.post(LOGIN_API, { email, password }).then((response) => {
      if (response.data.tokens.access.token) {
        dispatch(
          login(response.data.tokens.access.token, response.data.user.name),
        );
        dispatch(setLoading(false));
        dispatch(regSukses(false));
      }
    });
  } catch (err) {
    error(err.message);
    dispatch(setLoading(false));
  }
};

export const signupUser = (name, email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.post(REGISTER_API, { email, password, name }).then(() => {
      dispatch(register());
      dispatch(regSukses(true));
      dispatch(setLoading(false));
    });
  } catch (err) {
    dispatch(regSukses(false));
    dispatch(setLoading(false));
    error(err.message);
  }
};
