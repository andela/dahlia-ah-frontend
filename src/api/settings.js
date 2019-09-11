import axios from './index';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export default (value, callBack) => {
  const status = value === 'ON';
  axios.patch(`${BACKEND_PATH}/users/setting?allowEmailNotification=${status}`)
    .then(() => {
      callBack(value);
      const user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));
      user.allowEmailNotification = status;
      window.localStorage.setItem('AuthorsHavenUser', JSON.stringify(user));
    })
    .catch(() => {
      const formalValue = status ? 'OFF' : 'ON';
      callBack(formalValue);
    });
};
