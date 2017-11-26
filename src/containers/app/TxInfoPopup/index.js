import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import s from './styles.css';

import { formatAmount } from '../../../helpers/common/common';

import { closeTxPopup } from '../../../redux/modules/app/txInfoPopup';

import Popup from '../../../components/common/Popup';
import Status from '../../../components/common/Status';
import EmployeeAvatar from '../../../components/common/EmployeeAvatar';

const TxInfoPopup = (props) => {
  const {
    open,
    closeTxPopup,
    tx
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
    avatar,
    firstName,
    lastName,
    wallet
  } = employee;

  return (
    <Popup
      open={open}
      close={() => closeTxPopup()}>

      <div className={s.popup}>
        <div className={s.header}>
          <div className={s.value}>
            <span>{formatAmount(amount)}</span> {currency}
          </div>
          <div className={s.date}>
            {format(date, 'MM/DD/YY - HH:mm')}
            <div className={s.status}><Status status={status}/></div>
          </div>
        </div>

        <div className={s.body}>
          <div className={s.block}>
            <div className={s.blockValue}>{`${firstName} ${lastName}`}</div>
            <div className={s.blockLabel}>Sender</div>

            <div className={s.blockIcon}>
              <EmployeeAvatar
                firstName={firstName}
                lastName={lastName}
                id={employeeId}
                avatar={avatar}/>
            </div>
          </div>

          <div className={s.block}>
            <div className={s.blockValue}>{wallet}</div>
            <div className={s.blockLabel}>Wallet address</div>
          </div>
        </div>
      </div>

    </Popup>
  );
};

TxInfoPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  closeTxPopup: PropTypes.func.isRequired,
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
  (state) => ({
    ...state.app.txInfoPopup
  }),
  {
    closeTxPopup
  }
)(TxInfoPopup);
