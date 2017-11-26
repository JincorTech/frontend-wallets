import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.css';

const WalletInfo = (props) => {
  console.log(props);

  return (
    <div className={s.info}>
      <div className={s.row}>
        <div className={s.value}>0xd8bb5e11dc25e6fd4719cfc2a3c1d1a59a9107e9</div>
        <div className={s.label}>Wallet address</div>
      </div>

      <div className={s.row}>
        <div className={s.value}>1 Nov 2017</div>
        <div className={s.label}>Created</div>
      </div>

      <div className={s.row}>
        <div className={s.value}>ETH Blockchain</div>
        <div className={s.label}>Type of blockchain</div>
      </div>

      <div className={s.row}>
        <div className={s.value}>Corporate</div>
        <div className={s.label}>Type of wallet</div>
      </div>
    </div>
  );
};

WalletInfo.propTypes = {
  address: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  currency: PropTypes.oneOf(['ETH', 'JCR']).isRequired,
  type: PropTypes.oneOf('corporate', 'personal').isRequired
};

export default WalletInfo;
