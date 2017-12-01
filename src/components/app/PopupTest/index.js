import React from 'react';
import { connect } from 'react-redux';
import s from './styles.css';

import { closeTest } from '../../../redux/modules/app/popuptest';

import Popup from '../../common/Popup';
import Button from '../../common/Button';

const Test = (props) => {
  const { open, closeTest } = props;

  return (
    <Popup open={open} close={closeTest}>
      <div className={s.test}>
        This is Ropston Ethereum Testnet. You need testnet ETH to use it.
        Contact us at <b>support@jincor.com</b> to request it.
        <br/><br/>
        DONT send real ETH to addresses below.

        <div><Button onClick={() => closeTest()}>OK</Button></div>
      </div>
    </Popup>
  );
};

export default connect(
  (state) => ({
    ...state.app.test
  }),
  {
    closeTest
  }
)(Test);
