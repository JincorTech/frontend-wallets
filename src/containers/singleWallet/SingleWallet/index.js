import React, { Component } from 'react';
import s from './styles.css';

import Topbar from '../../../components/app/Topbar';
import Button from '../../../components/common/Button';
import Transaction from '../../../components/singleWallet/Transaction';
import WalletInfo from '../../../components/singleWallet/WalletInfo';

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
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
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
            <Button size="small">Make deposit</Button>
            <Button size="small" styl="secondary">Send ETH</Button>
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
      </div>
    );
  }
}

export default SingleWallet;
