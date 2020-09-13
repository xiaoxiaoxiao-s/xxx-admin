import axios from 'axios';

const apiUrl = '';

const request = function (config) {
  const opt = {
    method: 'get',
    url: `${apiUrl}${config.url}`,
  }
  delete config.url;
  return axios({...opt, ...config});
}

export default request; 