import React from 'react';
import s from './styles.css';

const pages = {
  '/wallets': 'Wallets',
  '/wallets/': 'Wallets'
};

const Pagename = (props) => {
  const { pathname, pagename } = props;

  if (pagename === 'Corporate wallet') {
    return (
      <div className={s.pagename}>
        <div>Corporate wallet</div>
        <img src={require('../../../assets/images/icons/corporateWallet.svg')}/>
      </div>
    );
  }

  if (pagename === 'Personal wallet') {
    return (
      <div>
        <div>Personal wallet</div>
        <img src={require('../../../assets/images/icons/personalWallet.svg')}/>
      </div>
    );
  }

  return (
    <div>{pages[pathname]}</div>
  );
};

export default Pagename;
