import {createSlice, createAction, createReducer} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import { buscarListagemCargas } from '../requests';

const persistConfig = {
  key: 'getListagemCargas',
  storage: AsyncStorage,
  whiteList: ['successPayload'],
};

export const getListagemCargasRequest = createAction(
  'cargas/getListagemCargasRequest',
  function prepare(payload: any) {
    return {
      payload: payload,
      meta: {
        offline: buscarListagemCargas(payload.latitude, payload.longitude)        
      },
    };
  },
);
export const getListagemCargasSucesso = createAction<any>(
  'cargas/getListagemCargasSucesso',
);
export const getListagemCargasFalha = createAction<any>(
  'cargas/getListagemCargasFalha',
);

const initialState = {
  isRequesting: false,
  hasFinished: false,
  successPayload: [],
  errors: [],
};

export default persistReducer(
  persistConfig,
  createReducer(initialState, {
    [getListagemCargasRequest.type]: (state, action) => {
      state.isRequesting = true;
      state.hasFinished = false;
    },
    [getListagemCargasSucesso.type]: (state, action) => {
      state.isRequesting = false;
      state.hasFinished = true;
      state.successPayload = action.payload.data.data.data;
      state.errors = [];
    },
    [getListagemCargasFalha.type]: (state, action) => {
      state.isRequesting = false;
      state.hasFinished = true;
      state.errors = action.payload;
    },
  }),
);
