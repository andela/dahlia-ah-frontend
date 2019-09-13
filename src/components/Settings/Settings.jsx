import React from 'react';
import './Settings.scss';
import SettingsItem from '../SettingsItem/SettingsItem';

const Settings = () => {
  const user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser')) || { allowEmailNotification: true };
  return (
    <div className="settings">
      <div className="content">
        <h5>Settings</h5>
        <div>
          <SettingsItem
            initialState={user.allowEmailNotification}
            title="Receive email notification"
            description="An email will be sent to you when ever you receive a notification or any other event"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
