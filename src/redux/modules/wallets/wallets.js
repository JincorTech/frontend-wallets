import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_WALLETS = 'wallets/wallets/FETCH_WALLETS';

export const fetchWallets = createAsyncAction(FETCH_WALLETS);

const initialState = from({
  wallets: [
    {
      type: 'personal',
      address: '0xa9eebb32a1d459eb1eb5078c543427c34da44313',
      balance: 120,
      currency: 'ETH',
      createdAt: 1511693723,
      transactions: [
        {
          id: '0x386202fde7ffd84f6f4f7c2baa98ff69fd13db4d2150bb8fc61c15f7c29d1efc',
          status: 'pending',
          amount: -100,
          currency: 'ETH',
          date: 1509494400,
          employee: {
            id: '11111111',
            wallet: '0xa9eebb32a1d459eb1eb5078c543427c34da44313',
            firstName: 'Aidar',
            lastName: 'Ibatullin',
            avatar: 'https://api.adorable.io/avatars/285/1111.png'
          }
        },
        {
          id: '0x111202fde7ffd84f6f4f7c2baa98ff69fd13db4d2150bb8fc61c15f7c29d1111',
          status: 'success',
          amount: 1.2340938092384092384,
          currency: 'ETH',
          date: 1509580800,
          employee: {
            id: '22222222',
            wallet: '0xa1111b32a1d459eb1eb5078c543427c34da44111',
            firstName: 'Mark',
            lastName: 'McMoore',
            avatar: 'https://api.adorable.io/avatars/285/2222.png'
          }
        },
        {
          id: '0x222202fde7ffd84f6f4f7c2baa98ff69fd13db4d2150bb8fc61c15f7c29d2222',
          status: 'failure',
          amount: 1223.48484849393023,
          currency: 'ETH',
          date: 1509667200,
          employee: {
            id: '3333333',
            wallet: '0xa3333b32a1d459eb1eb5078c543427c34da44333',
            firstName: 'John',
            lastName: 'Snow',
            avatar: 'https://api.adorable.io/avatars/285/3333.png'
          }
        }
      ]
    },
    {
      type: 'corporate',
      address: '0xa1234b32a1d459eb1eb5078c543427c34da41234',
      balance: 1.12399483948934,
      currency: 'ETH',
      createdAt: 1511693723,
      transactions: [
        {
          id: '0xfff202fde7ffd84f6f4f7c2baa98ff69fd13db4d2150bb8fc61c15f7c29d1dff',
          status: 'pending',
          amount: -1.349023940982304823,
          currency: 'ETH',
          date: 1512000000,
          employee: {
            id: '1114341',
            wallet: '0xa9eebb32a1d459eb1eb5078c543427c34da44313',
            firstName: 'Rut',
            lastName: 'Pola',
            avatar: 'https://api.adorable.io/avatars/285/dfjdf.png'
          }
        },
        {
          id: '0xooo202fde7ffd84f6f4f7c2baa98ff69fd13db4d2150bb8fc61c15f7c29dooo',
          status: 'success',
          amount: 1.2340938092384092384,
          currency: 'ETH',
          date: 1510272000,
          employee: {
            id: '34ijj34',
            wallet: '0xa1111b32a1d459eb1eb5078c543427c34da44344',
            firstName: 'Frank',
            lastName: 'Trans',
            avatar: 'https://api.adorable.io/avatars/285/dfndjnf.png'
          }
        },
        {
          id: '0x222202fde7ffd84f6f4f7c2baa98ff69fd13db4d2150bb8fc61c15f7c29d2222',
          status: 'failure',
          amount: 1223.48484849393023,
          currency: 'ETH',
          date: 1509840000,
          employee: {
            id: '3333333',
            wallet: '0xa3333b32a1d459eb1eb5078c543427c34da44333',
            firstName: 'John',
            lastName: 'Snow',
            avatar: 'https://api.adorable.io/avatars/285/3333.png'
          }
        }
      ]
    }
  ]
});

export default createReducer({}, initialState);
