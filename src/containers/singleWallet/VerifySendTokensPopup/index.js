import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import s from './styles.css';

import { required } from '../../../utils/validators';

import { closeVerifySendTokensPopup, verifySendTokens } from '../../../redux/modules/singleWallet/sendTokensPopup';

import Popup from '../../../components/common/Popup';
import RenderInput from '../../../components/forms/RenderInput';
import Button from '../../../components/common/Button';

class VerifySendTokensPopup extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      change,
      open,
      verification
    } = nextProps;

    console.log(verification);

    const { verificationId, method } = verification;

    if (open && verificationId) {
      change('verificationId', verificationId);
      change('method', method);
    }
  }

  render() {
    const {
      open,
      handleSubmit,
      closeVerifySendTokensPopup,
      spinner,
      invalid,
      verification,
      error
    } = this.props;

    const { method } = verification;

    const renderTip = () => (
      method === 'email'
        ? 'We sent the code to your email address. Please, check your inbox or spam folder.'
        : 'Use Google Authenticator to get confirmation code.'
    );

    return (
      <Popup
        open={open}
        close={() => closeVerifySendTokensPopup()}>

        <div className={s.popup}>
          <div className={s.header}>Verify sending tokens</div>

          <div className={s.body}>
            <div className={s.tip}>{renderTip()}</div>

            {error && <div className={s.error}>{error}</div>}

            <form onSubmit={handleSubmit(verifySendTokens)}>
              <div className={s.field}>
                <Field
                  component={RenderInput}
                  name="code"
                  placeholder="Verification code"
                  validate={required}/>
              </div>

              <div className={s.field}>
                <Field
                  component={RenderInput}
                  name="method"
                  type="hidden"/>
              </div>

              <div className={s.field}>
                <Field
                  component={RenderInput}
                  name="verificationId"
                  type="hidden"/>
              </div>

              <div className={s.button}>
                <Button type="submit" spinner={spinner} disabled={invalid}>Submit</Button>
              </div>
            </form>
          </div>
        </div>

      </Popup>
    );
  }
}

const FormComponent = reduxForm({
  form: 'verifyChangePassword',
  initialValues: {
    verificationId: '',
    code: '',
    method: ''
  }
})(VerifySendTokensPopup);

export default connect(
  (state) => ({
    open: state.singleWallet.sendTokensPopup.verifyOpen,
    verification: state.singleWallet.sendTokensPopup.verification,
    spinner: state.singleWallet.sendTokensPopup.spinner
  }),
  {
    closeVerifySendTokensPopup
  }
)(FormComponent);
