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
import VerifySendTokensPopup from '../VerifySendTokensPopup';

class SingleWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'transactions'
    };

    this._checkoutTab = this._checkoutTab.bind(this);
  }

  _checkoutTab(currentTab) {
    this.setState({ currentTab });
  }

  render() {
    const { currentTab } = this.state;

    const {
      openMakeDepositPopup,
      openSendTokensPopup,
      spinner,
      wallets,
      routeParams: {
        walletId
      }
    } = this.props;

    const wallet = wallets.reduce((acc, val) => {
      if (val.address === walletId) {
        return val;
      }

      return acc;
    }, {});

    const {
      type,
      balance,
      currrency,
      address,
    } = wallet;

    const getPagename = () => {
      if (type === 'corporate') {
        return 'Corporate wallet';
      }

      return 'Personal wallet';
    };

    const renderTxs = () => {
      if (wallet.transactions) {
        const txs = Array.from(wallet.transactions);
        return txs
          .sort((a, b) => (b.date - a.date))
          .map((tx) => (<Transaction key={tx.id + tx.date} tx={tx}/>));
      }

      return null;
    };

    const renderTabContent = () => {
      switch (currentTab) {
        case 'transactions':
          return (
            <div>
              {renderTxs()}
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
    };

    return (
      <div className={s.wrapper}>
        <Topbar pagename={getPagename()}/>

        <div className={s.info}>
          <div className={s.balance}>
            <div className={s.value}>
              <span>{balance}</span> {currrency}
            </div>

            <div className={s.label}>
              Balance
            </div>
          </div>

          <div className={s.buttons}>
            <Button
              spinner={spinner}
              size="small"
              onClick={() => openMakeDepositPopup(address)}>
              Make deposit
            </Button>

            <Button
              spinner={spinner}
              size="small"
              onClick={() => openSendTokensPopup({
                type,
                senderAddress: address,
                balance,
                currrency
              })}
              styl="secondary">
              Send {currrency}
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
            {renderTabContent()}
          </div>
        </div>

        <MakeDepositPopup/>
        <SendTokensPopup/>
        <VerifySendTokensPopup/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    ...state.wallets.wallets
  }),
  {
    openMakeDepositPopup,
    openSendTokensPopup
  }
)(SingleWallet);
