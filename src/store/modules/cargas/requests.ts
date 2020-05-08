import {all, call, put, select, takeLeading} from 'redux-saga/effects';
import api from '../../../services/api';
import {
  getListagemCargasRequest,
  getListagemCargasSucesso,
  getListagemCargasFalha,
} from './actions/getListagemCargas';

// function* buscarListagemCargas({payload}: any) {
//   try {
//     const response = yield call(api.get, `/carga/listagem-cargas`, {
//       params: payload,
//     });
//     const {data: responseData} = response;
//     yield put(getListagemCargasSucesso(responseData.data.data));
//   } catch (error) {
//     yield put(getListagemCargasFalha(error));
//   }
// }

export function buscarListagemCargas(latitude: number, longitude: number) {
  return {
    effect: {
      url: `/carga/listagem-cargas?latitude=${latitude}&longitude=${longitude}`,
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IkQxNkM0QzIwM0E3MjQyQ0FGRjJFNzNGRjlCQzY2NzNBOTJEMzMwNzIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIwV3hNSURweVFzcl9MblBfbThabk9wTFRNSEkifQ.eyJuYmYiOjE1ODg4NTk0OTYsImV4cCI6MTY4MzQ2NzQ5NiwiaXNzIjoiaHR0cHM6Ly9vbmdvY2FyZ2FzLWFjYy1ob21vbG9nLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjpbImh0dHBzOi8vb25nb2Nhcmdhcy1hY2MtaG9tb2xvZy5henVyZXdlYnNpdGVzLm5ldC9yZXNvdXJjZXMiLCJPbkdvQ2FyZ2FzIl0sImNsaWVudF9pZCI6Ik9uR29DYXJnYXMiLCJzdWIiOiIyYWI1OThhMS0zMWQ3LTQ1OWItYTczOS0wYjcxMzdlNDJmNmEiLCJhdXRoX3RpbWUiOjE1ODg4NTk0OTYsImlkcCI6ImxvY2FsIiwicm9sZSI6IjQiLCJzdHJjIjoiU3JNK2xWMnRnM3Azbmt0WnFYaWlHRC83Q0JUYW1KT2g3VVp1Zm96dFRGQTBHdWs2Mk0wbG9XYithRUZBVTVkWWhXN2xyMFVnd252b2hsVFVUbC94WEVRK2dTeUJSSXB1TGJoS2dEYUxPcUdLVTlvQll2b1JZQ3UydTVnaE16UGY0ajlweWx4K21WUW5WSlBlU1dUSjRxTktBQ2NKVFZBcERpNXJkMWlNcXJ4K203WWlKQm9NeWZNcE9OY0FMVy9LejVzN2hYU1g4TjJ3TjZsR3hkWmtSL09ldzJQc05aRlJpMjV1NnJFSTZGUzdvTzRTdFh2ZTRoTWpmQ3FXRDJPMzZSQUVqbVJXb2pPVnBSekV3UnZuVndac0tJZHJTb3M5WXhsa3lkTmFoU0E5aXlhY0lyZ1c5aVdaY21yUTlEYXBXeU13NVArN3dLQk45MndFWk10T0tRPT0iLCJ0ZW5hbnQiOiI2MjA2MDRjOS1hNDBlLTQ5MjctODUwNi1mNjIyMmE5YmVkYjQiLCJPY3BBcGltU3Vic2NyaXB0aW9uS2V5IjoiOWU4ZjE1NmY4MmFhNGU0MTllZDM2Mjg0ZjliNWEzOTMiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiY2FyZ2FzLXNjb3BlIiwiY2xhaW1zIiwicm9sZXMiXSwiYW1yIjpbInB3ZCJdfQ.XY3Ib2nWDLhusMH5LVL9m_yKGrYM45WfHP9Kg-pzfybMbIUtbnv8HOcLb5l2D6CCbtNu0iDCwId4cksivVzZxlkCFromAXMnK1_AG6NsZyJ0XQ_jIKsoipDitTV_lih-eITe3KZb7AF3Y2txjGmd2H_TthhqrA1-HV-YfjaUpYlQxAcWJaaa3ehdskoNrWws1aurjToEX_jedCDVfQivIsrrBg7FmFMui2lBR9BPb7O9oSbzSq3xxRxV_0wD9GJL92raQaOljUE8109xh2D4-ndBOeQSmEZbCRZgM41-_iFuNZ0ruAPM5ge1iOqUzmMamlsklpZLFMbWxelY1lncnw',
        'api-version': '2.0',
      },
    },
    commit: {type: getListagemCargasSucesso.type},
    discard: {type: getListagemCargasFalha.type},
  };
}

// export default all([
//   //takeLeading(getListagemCargasRequest.type, buscarListagemCargas),
// ]);
