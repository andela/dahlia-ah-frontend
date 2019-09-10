import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { markAsRead } from '../../api/notification';

const NotificationItem = ({
  notification, index, notifications, setNotification,
}) => {
  const classList = ['collection-item', 'avatar'];
  if (!notification.isRead) {
    classList.push('not-read');
  }
  return (
    <ul
      onClick={() => markAsRead(index, notifications, setNotification)}
      onKeyPress={() => markAsRead(index, notifications, setNotification)}
      className="collection"
      role="presentation"
    >
      <li id="notItem" className={classList.join(' ')}>
        <img id="notImage" src="https://img.icons8.com/color/50/000000/person-male.png" alt={notification.actor} />
        <p id="notText">
          { notification.actor }
          {' '}
          { notification.message }
          {' '}
          { `"${notification.novelTitle}"` }
          <br />
          {' '}
          {moment(notification.createdAt).utc().fromNow()}
        </p>
      </li>
    </ul>
  );
};


NotificationItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    novelTitle: PropTypes.string.isRequired,
    novelUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    novelTitle: PropTypes.string.isRequired,
    novelUrl: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
  })).isRequired,
  setNotification: PropTypes.func.isRequired,
};

export default NotificationItem;
