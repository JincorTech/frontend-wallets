import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.css';

const Wallet = (props) => {
  const {
    type,
    address
  } = props;

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
        <div className={s.wrap}>
          <div className={s.name}>Corporate wallet</div>
          <div className={s.address}>{address}</div>
          <div className={s.balance}><span>350</span> ETH</div>
        </div>

        <div className={s.lastTransaction}>
          <div className={s.date}>16/11/2017</div>
          <div className={s.balanceChange}>+100 ETH</div>
        </div>
      </div>
    </div>
  );
};

Wallet.PropTypes = {
  type: PropTypes.oneOf(['corporate', 'personal']).isRequred,
  address: PropTypes.string.isRequred,
  balance: PropTypes.number.isRequred,
  lastTransactionId: PropTypes.string.isRequred
};

export default Wallet;
