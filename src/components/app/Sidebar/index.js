import React from 'react';
import { Link, IndexLink } from 'react-router';
import s from './styles.css';
import { namedRoutes } from '../../../routes';

const Sidebar = (props) => {
  const { kyc, location } = props;
  const { pathname } = location;

  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        <img src={require('../../../assets/images/logo.svg')} alt="Jincor"/>
      </div>

      <div className={s.navigation}>
        <IndexLink
          className={s.link}
          activeClassName={s.active}
          to={namedRoutes.dashboard}>Dashboard</IndexLink>

        <Link
          className={s.link}
          activeClassName={s.active}
          to={namedRoutes.transactions}>Transactions</Link>

        <Link
          className={s.link}
          activeClassName={s.active}
          to={namedRoutes.referrals}>Partner Program</Link>

        <Link
          className={s.disabled}
          activeClassName={s.active}
          to={namedRoutes.sendTokens}>Send Tokens</Link>

        <Link
          className={s.link}
          activeClassName={s.active}
          to={namedRoutes.account}>Account</Link>

        {!kyc
          ? <a
            className={pathname === namedRoutes.verification ? s.activeLink : s.link}
            href={namedRoutes.verification}>Verification</a>
        : null}
      </div>
    </div>
  );
};

export default Sidebar;
