import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { routerActions } from 'react-router-redux';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';

import App from './containers/app/App';

import AppWrapper from './containers/app/AppWrapper';
import Wallets from './containers/wallets/Wallets';

export const namedRoutes = {
  base: '/',
  signIn: '/auth/signin',
  signUp: '/auth/signup',
  password: '/auth/password',
  dashboard: '/dashboard',
  transactions: '/dashboard/transactions',
  referrals: '/dashboard/partners-program',
  sendTokens: '/dashboard/send-tokens',
  account: '/dashboard/account',
  verification: '/dashboard/verification',
  verificationSuccess: '/dashboard/verification/success',
  verificationFailure: '/dashboard/verification/failure'
};

const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: namedRoutes.signIn,
  allowRedirectBack: false,
  authenticatedSelector: (state) => state.app.app.authorized,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRedirect to="/wallets"/>
      <Route path="wallets" component={userIsAuthenticated(AppWrapper)}>
        <IndexRoute component={Wallets}/>
      </Route>
    </Route>
  </div>
);

export default routes;
