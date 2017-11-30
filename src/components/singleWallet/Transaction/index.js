import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import s from './styles.css';

import { openTxPopup } from '../../../redux/modules/app/txInfoPopup';

import { formatAmount } from '../../../helpers/common/common';

import Status from '../../common/Status';
import EmployeeAvatar from '../../common/EmployeeAvatar';

const Transaction = (props) => {
  const {
    tx,
    openTxPopup
  } = props;

  const {
    status,
    amount,
    currency,
    date,
    employee
  } = tx;

  const {
    id: employeeId,
    firstName,
    lastName,
    avatar
  } = employee;

  return (
    <div className={s.transaction} onClick={() => openTxPopup(tx)}>
      <div className={s.icon}>
        <EmployeeAvatar
          firstName={firstName}
          lastName={lastName}
          id={employeeId}
          avatar={avatar}/>
      </div>

      <div className={s.info}>
        <div className={s.wrap}>
          <div className={s.name}>{`${firstName} ${lastName}`}</div>
          <div className={s.date}>
            {format(date * 1000, 'MM/DD/YY - HH:mm')}
            <div className={s.status}><Status status={status}/></div>
          </div>
          <div className={s.balance}><span>{formatAmount(amount)}</span> {currency}</div>
        </div>
      </div>
    </div>
  );
};

Transaction.propTypes = {
  openTxPopup: PropTypes.func.isRequired,
  tx: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['pending', 'success', 'failure']).isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(['', 'ETH', 'JCR']).isRequired,
    date: PropTypes.number.isRequired,
    employee: PropTypes.shape({
      id: PropTypes.string.isRequired,
      wallet: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      avatar: PropTypes.string
    })
  })
};

export default connect(
  null,
  {
    openTxPopup
  }
)(Transaction);
