import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './styles.css';

import { bigNum } from '../../../helpers/common/common';

import { closeSendTokensPopup, initiateSendTokens } from '../../../redux/modules/singleWallet/sendTokensPopup';

import Popup from '../../../components/common/Popup';
import RenderInput from '../../../components/forms/RenderInput';
import Button from '../../../components/common/Button';

class SendTokensPopup extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      change,
      open,
      senderAddress,
      currrency
    } = nextProps;

    if (open && senderAddress && currrency) {
      change('sender', senderAddress);
      change('currency', currrency);
    }
  }

  render() {
    const {
      open,
      spinner,
      invalid,
      handleSubmit,
      closeSendTokensPopup,
      senderAddress,
      balance,
      type,
      currrency
    } = this.props;

    return (
      <Popup
        close={() => closeSendTokensPopup()}
        open={open}>

        <div className={s.popup}>
          <div className={s.header}>Send {currrency}</div>

          <div className={s.body}>
            <div className={s.sender}>
              <div className={s.senderLabel}>Transfer from:</div>
              <div className={s.senderBlock}>
                <div className={s.info}>
                  <div className={s.type}>{type} wallet</div>
                  <div className={s.balance}><span>{bigNum(balance, 3)}</span> {currrency}</div>
                </div>
                <div className={s.address}>{senderAddress}</div>
              </div>
            </div>

            <form className={s.form} onSubmit={handleSubmit(initiateSendTokens)}>
              <div className={s.field}>
                <Field
                  component={RenderInput}
                  name="amount"
                  type="text"
                  placeholder="Enter amount"/>
              </div>

              <div className={s.field}>
                <Field
                  component={RenderInput}
                  name="receiver"
                  type="text"
                  placeholder="Recepient wallet address"/>
              </div>

              <div className={s.button}>
                <Button type="submit" spinner={spinner} disabled={invalid}>Send</Button>
              </div>
            </form>
          </div>
        </div>

      </Popup>
    );
  }
}

SendTokensPopup.propTypes = {
  type: PropTypes.oneOf(['corporate', 'personal']).isRequired,
  senderAddress: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  currrency: PropTypes.oneOf(['ETH', 'JCR']).isRequired,
  open: PropTypes.bool.isRequired
};

const FormComponent = reduxForm({
  form: 'sendTokens',
  initialValues: {
    sender: '',
    receiver: '',
    amount: '',
    currency: ''
  }
})(SendTokensPopup);

export default connect(
  (state) => ({
    ...state.singleWallet.sendTokensPopup
  }),
  {
    closeSendTokensPopup
  }
)(FormComponent);
