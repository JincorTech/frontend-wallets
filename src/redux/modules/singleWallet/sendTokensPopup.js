import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const OPEN_SEND_TOKENS_POPUP = 'singleWallet/sendTokensPopup/OPEN_SEND_TOKENS_POPUP';
export const CLOSE_SEND_TOKENS_POPUP = 'singleWallet/sendTokensPopup/CLOSE_SEND_TOKENS_POPUP';
export const INITIATE_SEND_TOKENS = 'singleWallet/sendTokensPopup/INITIATE_SEND_TOKENS';

export const openSendTokensPopup = createAction(OPEN_SEND_TOKENS_POPUP);
export const closeSendTokensPopup = createAction(CLOSE_SEND_TOKENS_POPUP);
export const initiateSendTokens = createSubmitAction(INITIATE_SEND_TOKENS);

const initialState = from({
  spinner: false,
  open: false,
  senderAddress: '',
  balance: '',
  currency: 'ETH'
});

export default createReducer({
  [OPEN_SEND_TOKENS_POPUP]: (state, { payload }) => (
    state.merge({
      open: true,
      ...payload
    })
  ),

  [CLOSE_SEND_TOKENS_POPUP]: (state) => (
    state.merge(initialState)
  ),

  [initiateSendTokens.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [initiateSendTokens.SUCCESS]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [initiateSendTokens.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  )
}, initialState);
