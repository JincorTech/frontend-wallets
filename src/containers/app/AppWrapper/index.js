import React, { Component } from 'react';
import s from './styles.css';

import Sidebar from '../../../components/app/Sidebar';
import TxInfoPopup from '../TxInfoPopup';

class AppWrapper extends Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <div className={s.wrapper}>
        <div className={s.sidebar}>
          <Sidebar/>
        </div>
        <div className={s.main}>
          <div className={s.children}>{children}</div>
        </div>

        <TxInfoPopup/>
      </div>
    );
  }
}

export default AppWrapper;
