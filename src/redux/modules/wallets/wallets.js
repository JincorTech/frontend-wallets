import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_WALLETS = 'wallets/wallets/FETCH_WALLETS';

export const fetchWallets = createAsyncAction(FETCH_WALLETS);

const initialState = from({
  wallets: []
});

export default createReducer({
  [fetchWallets.SUCCESS]: (state, { payload }) => (
    state.merge({
      wallets: payload
    })
  )
}, initialState);
