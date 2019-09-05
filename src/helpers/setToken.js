import axios from 'axios';

const setTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
    return axios.defaults.headers.common.Authorization;
  }
  return delete axios.defaults.commom.Authorization;
};

export default setTokenHeader;
