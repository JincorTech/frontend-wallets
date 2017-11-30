import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_MAKE_DEPOSIT_POPUP = 'singleWallet/makeDepositPopup/OPEN_MAKE_DEPOSIT_POPUP';
export const CLOSE_MAKE_DEPOSIT_POPUP = 'singleWallet/makeDepositPopup/CLOSE_MAKE_DEPOSIT_POPUP';

export const openMakeDepositPopup = createAction(OPEN_MAKE_DEPOSIT_POPUP);
export const closeMakeDepositPopup = createAction(CLOSE_MAKE_DEPOSIT_POPUP);

const initialState = from({
  open: false,
  address: ''
});

export default createReducer({
  [OPEN_MAKE_DEPOSIT_POPUP]: (state, { payload }) => (
    state.merge({
      open: true,
      address: payload
    })
  ),

  [CLOSE_MAKE_DEPOSIT_POPUP]: (state) => (
    state.merge({
      open: false,
      address: ''
    })
  )
}, initialState);
