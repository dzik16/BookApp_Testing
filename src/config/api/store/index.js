import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import { authReducers, dataReducers, globalReducers } from '../reducer';

const persistConfig = {
  key: 'root',
  blacklist: ['dataBooks'],
  storage: AsyncStorage,
};

const rootReducer = {
  dataBooks: dataReducers,
  Auth: authReducers,
  global: globalReducers,
};

const configPersist = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
);

export const Store = createStore(
  configPersist,
  applyMiddleware(ReduxThunk, reduxLogger),
);

export const Persistore = persistStore(Store);
