import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.css';

const Transaction = (props) => {
  console.log(props);

  return (
    <div className={s.transaction}>
      <div className={s.icon}>
        <img src={require('../../../assets/images/icons/corporateWallet.svg')}/>
      </div>

      <div className={s.info}>
        <div className={s.wrap}>
          <div className={s.name}>Unknown Sender</div>
          <div className={s.date}>16/11/2017 - 14:00</div>
          <div className={s.balance}><span>+ 100</span> ETH</div>
        </div>
      </div>
    </div>
  );
};

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  currency: PropTypes.oneOf(['ETH', 'JCR']).isRequired,
  change: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
};

export default Transaction;
