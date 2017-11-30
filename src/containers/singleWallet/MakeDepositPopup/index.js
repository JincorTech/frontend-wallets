import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import s from './styles.css';

import { closeMakeDepositPopup } from '../../../redux/modules/singleWallet/makeDepositPopup';

import Popup from '../../../components/common/Popup';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';

class MakeDepositPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };
  }

  render() {
    const { copied } = this.state;
    const {
      open,
      address,
      closeMakeDepositPopup
    } = this.props;

    return (
      <Popup
        close={() => closeMakeDepositPopup()}
        open={open}>

        <div className={s.popup}>
          <div className={s.header}>Make Deposit</div>

          <div className={s.body}>
            <div className={s.tip}>Use this address to deposit ETH<br/>to your wallet.</div>

            <div className={s.input}>
              <Input disabled value={address}/>
            </div>

            <div className={s.button}>
              <CopyToClipboard
                text={address}
                onCopy={() => this.setState({ copied: true })}>
                <Button size="small">
                  {copied ? 'Copied' : 'Copy address'}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </div>

      </Popup>
    );
  }
}

MakeDepositPopup.propTypes = {
  address: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
};

export default connect(
  (state) => ({
    ...state.singleWallet.makeDepositPopup
  }),
  {
    closeMakeDepositPopup
  }
)(MakeDepositPopup);
