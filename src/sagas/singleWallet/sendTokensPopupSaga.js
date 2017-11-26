import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
// import { get, post } from '../../utils/fetch';
// import notify from '../../utils/notifications';

import {
  initiateSendTokens
} from '../../redux/modules/singleWallet/sendTokensPopup';

/**
 * Initiate enable two factor auth
 */

function* initiateSendTokensIterator({ payload }) {
  try {
    yield call(console.log, payload);
    // const data = yield call(post, '/user/enable2fa/initiate');
    yield put(initiateSendTokens.success());
  } catch (e) {
    yield put(initiateSendTokens.failure(new SubmissionError({ _error: e.error })));
  }
}

function* initiateSendTokensSaga() {
  yield takeLatest(
    initiateSendTokens.REQUEST,
    initiateSendTokensIterator
  );
}

/**
 * Verify enable two factor auth
 */

// function* verifyEnableTwoFactorAuthIterator({ payload }) {
//   try {
//     yield call(post, '/user/enable2fa/verify', { verification: payload });
//     yield put(verifyEnableTwoFactorAuth.success());
//     yield put(fetchUser());
//     yield put(notify('success', 'Two-Factor Auth has been enabled'));
//   } catch (e) {
//     yield put(verifyEnableTwoFactorAuth.failure(new SubmissionError({ _error: e.error })));
//   }
// }
//
// function* verifyEnableTwoFactorAuthSaga() {
//   yield takeLatest(
//     verifyEnableTwoFactorAuth.REQUEST,
//     verifyEnableTwoFactorAuthIterator
//   );
// }

/**
 * Export
 */

export default function* () {
  yield all([
    fork(initiateSendTokensSaga),
    // fork(verifyEnableTwoFactorAuthSaga)
  ]);
}
