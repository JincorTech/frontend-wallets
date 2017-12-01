import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_TEST = 'app/test/OPEN_TEST';
export const CLOSE_TEST = 'app/test/CLOSE_TEST';

export const openTest = createAction(OPEN_TEST);
export const closeTest = createAction(CLOSE_TEST);

const initialState = from({
  open: false
});

export default createReducer({
  [OPEN_TEST]: (state) => (
    state.merge({
      open: true
    })
  ),

  [CLOSE_TEST]: (state) => (
    state.merge({
      open: false
    })
  )
}, initialState);
