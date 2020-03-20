import { put } from 'redux-saga/effects';
import { authSetIsLoading, authSetError } from '@actions';

export function* authBootsrapSaga(action) {
  try {
    console.log('authBootsrapSaga', action);
    yield put(authSetIsLoading(true));
  } catch (error) {
    yield put(authSetError(error));
  } finally {
    yield put(authSetIsLoading(false));
  }
}

export function* authWithPhoneSaga(action) {
  try {
    yield put(authSetIsLoading(true));
  } catch (error) {
    yield put(authSetError(error));
  } finally {
    yield put(authSetIsLoading(false));
  }
}
