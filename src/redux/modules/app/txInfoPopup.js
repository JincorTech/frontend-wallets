import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_TX_POPUP = 'app/txInfoPopup/OPEN_TX_POPUP';
export const CLOSE_TX_POPUP = 'app/txInfoPopup/CLOSE_TX_POPUP';

export const openTxPopup = createAction(OPEN_TX_POPUP);
export const closeTxPopup = createAction(CLOSE_TX_POPUP);

const initialState = from({
  open: false,
  tx: {
    id: '',
    status: 'success',
    amount: 0,
    currency: '',
    date: 0,
    employee: {
      id: '',
      wallet: '',
      firstName: '',
      lastName: '',
      avatar: ''
    }
  }
});

export default createReducer({
  [OPEN_TX_POPUP]: (state, { payload }) => (
    state.merge({
      open: true,
      tx: payload
    })
  ),

  [CLOSE_TX_POPUP]: (state) => (
    state.merge(initialState)
  )
}, initialState);
