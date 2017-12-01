import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { fetchWallets } from '../../../redux/modules/wallets/wallets';

import Sidebar from '../../../components/app/Sidebar';
import TxInfoPopup from '../TxInfoPopup';

class AppWrapper extends Component {
  componentWillMount() {
    this.props.fetchWallets();

    setInterval(this.props.fetchWallets, 30000);
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div className={s.wrapper}>
        <div className={s.sidebar}>
          <Sidebar/>
        </div>
        <div className={s.main}>
          <div className={s.children}>{children}</div>
        </div>

        <TxInfoPopup/>
      </div>
    );
  }
}

export default connect(
  null,
  {
    fetchWallets
  }
)(AppWrapper);
