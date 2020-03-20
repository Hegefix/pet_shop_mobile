import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '@reducers';
import { AUTH_BOOTSTRAP_ASYNC, AUTH_WITH_PHONE_ASYNC } from '@actionTypes';
import { authBootsrapSaga, authWithPhoneSaga } from '@sagas';

function* rootSaga() {
  yield takeLatest(AUTH_BOOTSTRAP_ASYNC, authBootsrapSaga);
  yield takeLatest(AUTH_WITH_PHONE_ASYNC, authWithPhoneSaga);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
