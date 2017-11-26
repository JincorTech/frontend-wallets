import React from 'react';
import s from './styles.css';

import Pagename from '../Pagename';

const Topbar = (props) => (
  <div className={s.topbar}>
    <div className={s.title}><Pagename {...props}/></div>
  </div>
);

export default Topbar;
