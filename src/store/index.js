import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { authReducer } from '@reducers';
import { AUTH_WITH_PHONE_ASYNC } from '@actionTypes';
import { authWithPhoneSaga } from '@sagas';

function* rootSaga() {
  yield takeLatest(AUTH_WITH_PHONE_ASYNC, authWithPhoneSaga);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;
