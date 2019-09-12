import React, { useState } from 'react';
import './SettingsItem.scss';
import PropTypes from 'prop-types';
import { handleSelected } from '../../helpers/handleSelected';

const SettingsItem = ({ initialState, title, description }) => {
  const btnInitialValue = initialState ? 'ON' : 'OFF';
  const [selected, setSelected] = useState(btnInitialValue);

  return (
    <div className="settings-item">
      <div className="settings-action">
        <p className="title">{title}</p>
        <div className="toggle-btn">
          <span id="on" className={selected === 'ON' ? 'selected' : ''} role="presentation" onClick={() => handleSelected('ON', setSelected)}>ON</span>
          <span id="off" className={selected === 'OFF' ? 'selected' : ''} role="presentation" onClick={() => handleSelected('OFF', setSelected)}>OFF</span>
        </div>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

SettingsItem.propTypes = {
  initialState: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SettingsItem;
