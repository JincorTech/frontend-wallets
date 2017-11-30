import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const OPEN_SEND_TOKENS_POPUP = 'singleWallet/sendTokensPopup/OPEN_SEND_TOKENS_POPUP';
export const CLOSE_SEND_TOKENS_POPUP = 'singleWallet/sendTokensPopup/CLOSE_SEND_TOKENS_POPUP';
export const INITIATE_SEND_TOKENS = 'singleWallet/sendTokensPopup/INITIATE_SEND_TOKENS';
export const OPEN_VERIFY_SEND_TOKENS_POPUP = 'singleWallet/sendTokensPopup/OPEN_VERIFY_SEND_TOKENS_POPUP';
export const CLOSE_VERIFY_SEND_TOKENS_POPUP = 'singleWallet/sendTokensPopup/CLOSE_VERIFY_SEND_TOKENS_POPUP';
export const VERIFY_SEND_TOKENS = 'singleWallet/sendTokensPopup/VERIFY_SEND_TOKENS';

export const openSendTokensPopup = createAction(OPEN_SEND_TOKENS_POPUP);
export const closeSendTokensPopup = createAction(CLOSE_SEND_TOKENS_POPUP);
export const initiateSendTokens = createSubmitAction(INITIATE_SEND_TOKENS);
export const openVerifySendTokensPopup = createAction(OPEN_VERIFY_SEND_TOKENS_POPUP);
export const closeVerifySendTokensPopup = createAction(CLOSE_VERIFY_SEND_TOKENS_POPUP);
export const verifySendTokens = createSubmitAction(VERIFY_SEND_TOKENS);

const initialState = from({
  spinner: false,
  open: false,
  verifyOpen: false,
  senderAddress: '',
  balance: '',
  currency: '',
  verification: {
    verificationId: '',
    expiredOn: 0,
    status: 0,
    method: ''
  }
});

export default createReducer({
  [OPEN_SEND_TOKENS_POPUP]: (state, { payload }) => (
    state.merge({
      open: true,
      ...payload
    })
  ),

  [CLOSE_SEND_TOKENS_POPUP]: (state) => (
    state.merge({
      open: false
    })
  ),

  [OPEN_VERIFY_SEND_TOKENS_POPUP]: (state) => (
    state.merge({
      verifyOpen: true
    })
  ),

  [CLOSE_VERIFY_SEND_TOKENS_POPUP]: (state) => (
    state.merge({
      verifyOpen: false
    })
  ),

  [initiateSendTokens.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [initiateSendTokens.SUCCESS]: (state, { payload }) => (
    state.merge({
      spinner: false,
      open: false,
      verifyOpen: true,
      verification: payload.verification
    })
  ),

  [initiateSendTokens.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [verifySendTokens.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [verifySendTokens.SUCCESS]: (state) => (
    state.merge(initialState)
  ),

  [verifySendTokens.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  )
}, initialState);
