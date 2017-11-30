import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { formatAmount } from '../../../helpers/common/common';

import { openTxPopup } from '../../../redux/modules/app/txInfoPopup';

import s from './styles.css';

import Status from '../../common/Status';

const Wallet = (props) => {
  const {
    type,
    address,
    balance,
    currrency,
    transactions,
    openTxPopup
  } = props;

  console.log(props);

  const sortedTxs = (txs) => Array.from(txs).sort((a, b) => b.date - a.date);
  const lastTx = sortedTxs(transactions)[0];

  const renderIcon = () =>
    (type === 'corporate'
      ? (<img src={require('../../../assets/images/icons/corporateWallet.svg')}/>)
      : (<img src={require('../../../assets/images/icons/personalWallet.svg')}/>));

  return (
    <div className={s.wallet}>
      <div className={s.icon}>
        {renderIcon()}
      </div>

      <div className={s.info}>
        <Link to={`/wallets/${address}`} className={s.wrap}>
          <div className={s.name}>{type} wallet</div>
          <div className={s.address}>{address}</div>
          <div className={s.balance}><span>{balance}</span> {currrency}</div>
        </Link>

        {transactions.length > 0 ? (
          <div className={s.lastTransaction} onClick={() => openTxPopup(lastTx)}>
            <div className={s.date}>
              {format(lastTx.date * 1000, 'MM/DD/YY - HH:mm')}
              <div className={s.status}><Status status={lastTx.status}/></div>
            </div>
            <div className={s.balanceChange}>{formatAmount(lastTx.amount)} {lastTx.currency}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

Wallet.PropTypes = {
  type: PropTypes.oneOf(['corporate', 'personal']).isRequired,
  address: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  currrency: PropTypes.oneOf(['ETH', 'JCR']).isRequired,
  lastTransactionId: PropTypes.string.isRequired
};

export default connect(
  null,
  {
    openTxPopup
  }
)(Wallet);
