import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { openMakeDepositPopup } from '../../../redux/modules/singleWallet/makeDepositPopup';

import Topbar from '../../../components/app/Topbar';
import Button from '../../../components/common/Button';
import Transaction from '../../../components/singleWallet/Transaction';
import WalletInfo from '../../../components/singleWallet/WalletInfo';
import MakeDepositPopup from '../MakeDepositPopup';

const TXS = [
  {
    id: 'txid1111',
    status: 'pending',
    amount: 200,
    currency: 'ETH',
    date: 1511714419000,
    employee: {
      id: 'userid1111',
      wallet: '123123123',
      firstName: 'John',
      lastName: 'Doe',
      avatar: ''
    }
  },
  {
    id: 'txid2222',
    status: 'success',
    amount: -50,
    currency: 'ETH',
    date: 1511714419000,
    employee: {
      id: 'userid2222',
      wallet: '83838383',
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: ''
    }
  },
  {
    id: 'txid3333',
    status: 'failure',
    amount: 0.1111,
    currency: 'ETH',
    date: 1511714419000,
    employee: {
      id: 'userid3333',
      wallet: '84848573874',
      firstName: 'James',
      lastName: 'Doe',
      avatar: ''
    }
  }
];

class SingleWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'transactions'
    };

    this._checkoutTab = this._checkoutTab.bind(this);
    this._renderTabContent = this._renderTabContent.bind(this);
  }

  _checkoutTab(currentTab) {
    this.setState({ currentTab });
  }

  _renderTabContent() {
    const { currentTab } = this.state;

    switch (currentTab) {
      case 'transactions':
        return (
          <div>
            {TXS.map((tx) => (<Transaction key={tx.id + tx.date} tx={tx}/>))}
          </div>
        );
      case 'wallet':
        return (
          <div>
            <WalletInfo/>
          </div>
        );
      default:
        return (
          <div>Something went wrong, please try to reload the page.</div>
        );
    }
  }

  render() {
    const { currentTab } = this.state;
    const { openMakeDepositPopup } = this.props;

    return (
      <div className={s.wrapper}>
        <Topbar pagename="Corporate wallet"/>

        <div className={s.info}>
          <div className={s.balance}>
            <div className={s.value}>
              <span>350</span> ETH
            </div>

            <div className={s.label}>
              Balance
            </div>
          </div>

          <div className={s.buttons}>
            <Button
              size="small"
              onClick={() => openMakeDepositPopup('WALLET ADDRESS')}>
              Make deposit
            </Button>

            <Button
              size="small"
              styl="secondary">
              Send ETH
            </Button>
          </div>
        </div>

        <div className={s.container}>
          <div className={s.tabs}>
            <div
              className={currentTab === 'transactions' ? s.active : s.tab}
              onClick={() => this._checkoutTab('transactions')}>
              Transactions
            </div>

            <div
              className={currentTab === 'wallet' ? s.active : s.tab}
              onClick={() => this._checkoutTab('wallet')}>
              Wallet information
            </div>
          </div>

          <div className={s.tabContent}>
            {this._renderTabContent()}
          </div>
        </div>

        <MakeDepositPopup/>
      </div>
    );
  }
}

export default connect(
  null,
  {
    openMakeDepositPopup
  }
)(SingleWallet);
