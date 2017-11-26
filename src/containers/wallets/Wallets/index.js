import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import Topbar from '../../../components/app/Topbar';
import Wallet from '../../../components/wallets/Wallet';

class Wallets extends Component {
  render() {
    const { wallets } = this.props;
    console.log(wallets);

    return (
      <div className={s.wrapper}>
        <Topbar pathname={this.props.location.pathname}/>

        <div>
          {wallets.map((wallet) => <Wallet key={wallet.address + wallet.createdAt} {...wallet}/>)}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  ...state.wallets.wallets
}))(Wallets);
