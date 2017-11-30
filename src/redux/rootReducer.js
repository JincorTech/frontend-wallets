import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import { reducer as formReducer } from 'redux-form';
import { reducer as notificationsReducer } from 'react-notification-system-redux';

import app from './modules/app/app';
import txInfoPopup from './modules/app/txInfoPopup';

import wallets from './modules/wallets/wallets';

import makeDepositPopup from './modules/singleWallet/makeDepositPopup';
import sendTokensPopup from './modules/singleWallet/sendTokensPopup';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  notifications: notificationsReducer,

  app: combineReducers({
    app,
    txInfoPopup
  }),

  wallets: combineReducers({
    wallets
  }),

  singleWallet: combineReducers({
    makeDepositPopup,
    sendTokensPopup
  })
});
