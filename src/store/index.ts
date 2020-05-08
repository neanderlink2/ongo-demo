import {applyMiddleware, compose, Action} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {rootSaga} from './rootSaga';
import {createOffline, offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {AxiosRequestConfig, AxiosError} from 'axios';
import api from '../services/api';
import {OfflineAction} from '@redux-offline/redux-offline/lib/types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const effect = (effect: AxiosRequestConfig, _action: OfflineAction) =>
  api(effect);
const discard = (
  error: AxiosError,
  _action: OfflineAction,
  _retries: number,
) => {
  const {request, response} = error;
  if (!request) throw error; // There was an error creating the request
  if (!response) return false; // There was no response
  return 400 <= response.status && response.status < 500;
};

const saga = createSagaMiddleware();
const enhancers: any[] = [];
const middleware = [saga];

const persistentReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  offline({
    ...offlineConfig,
    persistAutoRehydrate: (config) => {
      return (next) => {
        return next;
      };
    },
    effect,
    discard,
  }),
  ...enhancers,
);

const store = configureStore({
  middleware: [saga],
  enhancers: [composedEnhancers],
  reducer: persistentReducer,
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export default () => ({store, persistor: persistStore(store)});
