import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {
  authSetIsLoading,
  authSetError,
  authSetUser,
  authSetIsInitialized,
} from '@actions';

export function* authBootsrapSaga() {
  try {
    yield put(authSetIsLoading(true));
    const user = yield call(AsyncStorage.getItem, '@user');
    yield put(authSetUser(user || null));
    yield put(authSetIsInitialized(true));
  } catch (error) {
    console.log('error', error);
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
