import React from 'react';
import { Link } from 'react-router';
import s from './styles.css';

const Sidebar = () => (
  <div className={s.sidebar}>
    <div className={s.logo}>
      <img src={require('../../../assets/images/logo.svg')} alt="Jincor"/>
    </div>

    <div className={s.navigation}>
      <a className={s.link} href="https://beta.jincor.com/msg">Messenger</a>
      <a className={s.link} href="https://beta.jincor.com/cmp">My Company</a>
      <a className={s.link} href="/contracts">Contracts</a>
      <Link to="/wallets" className={s.active}>Wallets</Link>
      <a className={s.link} href="https://beta.jincor.com/cmp/app/search">Search</a>
    </div>
  </div>
);

export default Sidebar;
