import React from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';
import NotificationItem from '../NotificationItem/NotificationItem';

const Notification = ({ notifications, setNotification, markAllAsRead }) => (
  <div id="notification" className="notification-container">
    <div className="notification-header">
      <span>Notifications</span>
      <div>
        <button id="mark-all" onClick={() => markAllAsRead(notifications, setNotification)} className="mark-all" type="button">Mark All As Read</button>
      </div>
    </div>
    <div>
      {notifications.length > 0 ? notifications.map((notification, index) => (
        <NotificationItem
          key={notification.id}
          notifications={notifications}
          setNotification={setNotification}
          index={index}
          notification={notification}
        />
      ))
        : <p>You don&#39;t have any notification yet</p>}
    </div>
  </div>
);

Notification.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    novelTitle: PropTypes.string.isRequired,
    novelUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
  })).isRequired,
  markAllAsRead: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};

export default Notification;
