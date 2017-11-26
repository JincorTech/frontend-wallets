import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import appSaga from './app/appSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(appSaga)
  ]);
}
