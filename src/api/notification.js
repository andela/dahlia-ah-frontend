import axios from './index';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export const markAllAsRead = (notifications, setNotification) => {
  axios.patch(`${BACKEND_PATH}/notification`).then(() => {
    const updatedNotification = [...notifications];
    updatedNotification.forEach((notification) => {
      notification.isRead = true;
    });
    setNotification(updatedNotification);
  })
    .catch(() => {});
};

export const markAsRead = (index, notifications, setNotification) => {
  const { id, isRead } = notifications[index];
  if (isRead) {
    return;
  }
  axios.patch(`${BACKEND_PATH}/notification/${id}`).then(() => {
    const updatedNotification = [...notifications];
    updatedNotification[index].isRead = true;
    setNotification(updatedNotification);
  })
    .catch(() => {});
};
