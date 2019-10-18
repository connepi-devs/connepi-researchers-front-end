import { axiosInstance } from './axios-instance';

const axios = axiosInstance;

export default {
  getArticlesPerInstitutePerAreaPerYear() {
    return axios.get('/publicacoes/build_graphic');
  },
};
