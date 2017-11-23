import React, { Component } from 'react';
import s from './styles.css';

import Wallet from '../../../components/wallets/Wallet';

class Wallets extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <div>
          <Wallet type="corporate" address="dfjdjfdjfhjhjdf" balance={330}/>
          <Wallet type="personal" address="28898348948934" balance={55}/>
        </div>
      </div>
    );
  }
}

export default Wallets;
