import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;
export default (limit = 1, setBanner) => {
  axios.get(`${BACKEND_PATH}/novels/random?limit=${limit}`)
    .then(({ data }) => {
      setBanner(data.data);
    });
};
