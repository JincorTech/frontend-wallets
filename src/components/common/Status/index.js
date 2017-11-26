import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.css';

const Status = ({ status }) => {
  // dont render success txs
  // const renderSuccess = () => (<div className={s.success}>Success</div>);
  const renderPending = () => (<div className={s.pending}>Pending</div>);
  const renderFailure = () => (<div className={s.failure}>Failure</div>);

  switch (status) {
    case 'success':
      return null;
    case 'pending':
      return renderPending();
    case 'failure':
      return renderFailure();
    default:
      return null;
  }
};

Status.propTypes = {
  status: PropTypes.oneOf(['pending', 'success', 'failure'])
};

export default Status;
