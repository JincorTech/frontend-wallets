import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import s from './styles.css';

const WalletInfo = (props) => {
  const {
    address,
    createdAt,
    currency,
    type
  } = props;

  return (
    <div className={s.info}>
      <div className={s.row}>
        <div className={s.value}>{address}</div>
        <div className={s.label}>Wallet address</div>
      </div>

      <div className={s.row}>
        <div className={s.value}>{format(createdAt * 1000, 'DD MMM YYYY')}</div>
        <div className={s.label}>Created</div>
      </div>

      <div className={s.row}>
        <div className={s.value}>{currency} Blockchain</div>
        <div className={s.label}>Type of blockchain</div>
      </div>

      <div className={s.row}>
        <div className={s.value}>{type}</div>
        <div className={s.label}>Type of wallet</div>
      </div>
    </div>
  );
};

WalletInfo.propTypes = {
  address: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  currency: PropTypes.oneOf(['ETH', 'JCR']).isRequired,
  type: PropTypes.oneOf(['corporate', 'personal']).isRequired
};

export default WalletInfo;
