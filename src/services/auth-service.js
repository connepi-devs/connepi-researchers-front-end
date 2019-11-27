import { axiosInstance } from './axios-instance';

const axios = axiosInstance;

export default {
  login(body) {
    return axios.post('/auth/sign_in', body);
  },
  signUp(body) {
    return axios.post('/auth', body);
  },
};
