import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import { reducer as formReducer } from 'redux-form';
import { reducer as notificationsReducer } from 'react-notification-system-redux';

import app from './modules/app/app';
import txInfoPopup from './modules/app/txInfoPopup';

import makeDepositPopup from './modules/singleWallet/makeDepositPopup';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  notifications: notificationsReducer,

  app: combineReducers({
    app,
    txInfoPopup
  }),

  singleWallet: combineReducers({
    makeDepositPopup
  })
});
