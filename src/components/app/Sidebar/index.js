import React from 'react';
import s from './styles.css';

const Sidebar = () => (
  <div className={s.sidebar}>
    <div className={s.logo}>
      <img src={require('../../../assets/images/logo.svg')} alt="Jincor"/>
    </div>

    <div className={s.navigation}>
      <a className={s.link} href="">Messenger</a>
      <a className={s.link} href="">My Company</a>
      <a className={s.link} href="">Contracts</a>
      <a className={s.active}>Wallets</a>
      <a className={s.link} href="">Search</a>
    </div>
  </div>
);

export default Sidebar;
