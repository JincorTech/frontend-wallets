import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.css';

import { getInitials, getBackgroundColor } from '../../../utils/avatarColorGenerator';

const EmployeeAvatar = (props) => {
  const {
    firstName,
    lastName,
    id,
    avatar
  } = props;

  const renderAvatar = () => (<img className={s.avatar} src={avatar}/>);
  const renderMock = () => (
    <div className={s.mock} style={getBackgroundColor(id)}>
      {getInitials(`${firstName} ${lastName}`)}
    </div>
  );

  return avatar ? renderAvatar() : renderMock();
};

EmployeeAvatar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string
};

export default EmployeeAvatar;
