import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import appSaga from './app/appSaga';
import walletsSaga from './wallets/walletsSaga';
import sendTokensPopupSaga from './singleWallet/sendTokensPopupSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(appSaga),
    fork(walletsSaga),
    fork(sendTokensPopupSaga)
  ]);
}
