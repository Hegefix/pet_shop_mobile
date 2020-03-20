import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import * as reducers from '@reducers';
import { actionTypes } from '@constants';
import { authSagas } from '@sagas';

function* rootSaga() {
  yield takeLatest(
    actionTypes.AUTH_WITH_PHONE_ASYNC,
    authSagas.authWithPhoneSaga,
  );
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers(...reducers),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;
