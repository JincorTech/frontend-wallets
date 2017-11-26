import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { openMakeDepositPopup } from '../../../redux/modules/singleWallet/makeDepositPopup';
import { openSendTokensPopup } from '../../../redux/modules/singleWallet/sendTokensPopup';

import Topbar from '../../../components/app/Topbar';
import Button from '../../../components/common/Button';
import Transaction from '../../../components/singleWallet/Transaction';
import WalletInfo from '../../../components/singleWallet/WalletInfo';
import MakeDepositPopup from '../MakeDepositPopup';
import SendTokensPopup from '../SendTokensPopup';

class SingleWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'transactions',
      wallet: {
        type: '',
        address: '',
        balance: 0,
        currency: 'ETH',
        createdAt: 0,
        transactions: []
      }
    };

    this._checkoutTab = this._checkoutTab.bind(this);
    this._renderTabContent = this._renderTabContent.bind(this);
  }

  componentWillMount() {
    const {
      wallets,
      routeParams: {
        walletId
      }
    } = this.props;

    const wallet = wallets.reduce((acc, val) =>
      ((val.address === walletId)
        ? val
        : acc));

    this.setState({ wallet });
  }

  _checkoutTab(currentTab) {
    this.setState({ currentTab });
  }

  _renderTabContent() {
    const { currentTab, wallet } = this.state;

    switch (currentTab) {
      case 'transactions':
        return (
          <div>
            {wallet.transactions.map((tx) => (<Transaction key={tx.id + tx.date} tx={tx}/>))}
          </div>
        );
      case 'wallet':
        return (
          <div>
            <WalletInfo {...wallet}/>
          </div>
        );
      default:
        return (
          <div>Something went wrong, please try to reload the page.</div>
        );
    }
  }

  render() {
    const { currentTab, wallet } = this.state;
    const {
      openMakeDepositPopup,
      openSendTokensPopup
    } = this.props;
    const {
      type,
      balance,
      currency,
      address,
    } = wallet;

    const getPagename = () => {
      if (type === 'corporate') {
        return 'Corporate wallet';
      }

      return 'Personal wallet';
    };

    return (
      <div className={s.wrapper}>
        <Topbar pagename={getPagename()}/>

        <div className={s.info}>
          <div className={s.balance}>
            <div className={s.value}>
              <span>{balance}</span> {currency}
            </div>

            <div className={s.label}>
              Balance
            </div>
          </div>

          <div className={s.buttons}>
            <Button
              size="small"
              onClick={() => openMakeDepositPopup(address)}>
              Make deposit
            </Button>

            <Button
              size="small"
              onClick={() => openSendTokensPopup({
                type,
                senderAddress: address,
                balance,
                currency
              })}
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
        <SendTokensPopup/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    wallets: state.wallets.wallets.wallets
  }),
  {
    openMakeDepositPopup,
    openSendTokensPopup
  }
)(SingleWallet);
