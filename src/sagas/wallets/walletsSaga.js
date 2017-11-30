import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { get } from '../../utils/fetch';
// import notify from '../../utils/notifications';

import { fetchWallets } from '../../redux/modules/wallets/wallets';

/**
 * Fetch wallets
 */

function* fetchWalletsIterator() {
  try {
    const data = yield call(get, '/wallets');
    yield put(fetchWallets.success(data));
  } catch (e) {
    yield call(console.error, e);
  }
}

function* fetchWalletsSaga() {
  yield takeLatest(
    fetchWallets.REQUEST,
    fetchWalletsIterator
  );
}

/**
 * Export
 */

export default function* () {
  yield all([
    fork(fetchWalletsSaga)
  ]);
}
