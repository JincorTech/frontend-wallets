import React from 'react';
import s from './styles.css';

const Sidebar = () => (
  <div className={s.sidebar}>
    <div className={s.logo}>
      <img src={require('../../../assets/images/logo.svg')} alt="Jincor"/>
    </div>

    <div className={s.navigation}>
      <a className={s.link} href="https://beta.jincor.com/cmp">My Company</a>
      <a className={s.link} href="https://beta.jincor.com/cmp/app/search">Search</a>
      <a href="/wallets" className={s.active}>Wallets</a>
      <a className={s.disabled} href="/">Contracts</a>
      <a className={s.link} href="https://beta.jincor.com/msg">Messenger</a>
    </div>
  </div>
);

export default Sidebar;
