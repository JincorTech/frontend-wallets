import React, { Component } from 'react';
import s from './styles.css';

class Popup extends Component {
  constructor(props) {
    super(props);

    this._handleBackdropClick = this._handleBackdropClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      document.body.classList.add('popupOpened');
    } else {
      document.body.classList.remove('popupOpened');
    }
  }

  _handleBackdropClick(e) {
    if (this.popup.contains(e.target)) {
      return;
    }

    this.props.close();
  }

  render() {
    const {
      children,
      open,
      close
    } = this.props;

    const renderPopup = () => (
      <div className={s.background} onClick={this._handleBackdropClick}>
        <div className={s.close}>
          <button type="button" onClick={() => close()}>
            <img src={require('./images/close.svg')}/>
          </button>
        </div>

        <div className={s.popup} ref={(popup) => { this.popup = popup; }}>
          {children}
        </div>
      </div>
    );

    return open && renderPopup();
  }
}

export default Popup;
