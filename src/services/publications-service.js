import { axiosInstance } from './axios-instance';

const axios = axiosInstance;

export default {
  get(queryParams) {
    return axios.get(`/publications?${queryParams}`);
  },
};
