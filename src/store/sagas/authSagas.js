import { put } from 'redux-saga/effects';
import { authActions } from '@actions';

export function* authWithPhoneSaga() {
  const { authSetIsLoading, authSetError } = authActions;
  try {
    yield put(authSetIsLoading(true));
  } catch (error) {
    yield put(authSetError(error));
  } finally {
    yield put(authSetIsLoading(false));
  }
}
