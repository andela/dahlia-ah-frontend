import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export default (setNovelOfTheWeek) => {
  axios.get(`${BACKEND_PATH}/noveloftheweek`)
    .then(({ data }) => {
      setNovelOfTheWeek(data.data);
    });
};
