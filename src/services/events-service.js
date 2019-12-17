import { axiosInstance } from './axios-instance';

const axios = axiosInstance;

export default {
  get() {
    return axios.get('/events');
  },
};
