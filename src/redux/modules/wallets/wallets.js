import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_WALLETS = 'wallets/wallets/FETCH_WALLETS';

export const fetchWallets = createAsyncAction(FETCH_WALLETS);

const initialState = from({
  spinner: false,
  wallets: []
});

export default createReducer({
  [fetchWallets.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [fetchWallets.SUCCESS]: (state, { payload }) => (
    state.merge({
      spinner: false,
      wallets: payload
    })
  ),

  [fetchWallets.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  )
}, initialState);
