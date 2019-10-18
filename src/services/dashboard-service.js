import { axiosInstance } from './axios-instance';

const axios = axiosInstance;

export default {
  getArticlesPerInstitutePerAreaPerYear(queryParams) {
    return axios.get(`/publicacoes/build_graphic?${queryParams}`);
  },
};
