import React from 'react';

const pages = {
  '/wallets': 'Wallets'
};

const Pagename = ({ pathname }) => (<span>{pages[pathname]}</span>);

export default Pagename;
