import snackbarHandler from './actions/snackbarHandler';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

export default combineReducers({
    handler: snackbarHandler
});