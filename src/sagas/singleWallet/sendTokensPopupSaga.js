import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { post } from '../../utils/fetch';
import notify from '../../utils/notifications';

import {
  initiateSendTokens,
  verifySendTokens
} from '../../redux/modules/singleWallet/sendTokensPopup';
import { fetchWallets } from '../../redux/modules/wallets/wallets';

/**
 * Initiate enable two factor auth
 */

function* initiateSendTokensIterator({ payload }) {
  try {
    const data = yield call(post, '/tx', payload);
    yield put(initiateSendTokens.success(data));
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

function* verifySendTokensIterator({ payload }) {
  try {
    yield call(post, '/tx/verify', { verification: payload });
    yield put(verifySendTokens.success());
    yield put(notify('success', 'Transaction in process now'));
    yield put(fetchWallets());
  } catch (e) {
    yield put(verifySendTokens.failure(new SubmissionError({ _error: e.error })));
  }
}

function* verifySendTokensAuthSaga() {
  yield takeLatest(
    verifySendTokens.REQUEST,
    verifySendTokensIterator
  );
}

/**
 * Export
 */

export default function* () {
  yield all([
    fork(initiateSendTokensSaga),
    fork(verifySendTokensAuthSaga)
  ]);
}
