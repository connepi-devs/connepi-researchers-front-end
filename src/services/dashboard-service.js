import { axiosInstance } from './axios-instance';

const axios = axiosInstance;

export default {
  getArticlesPerInstitutePerAreaPerYear(queryParams) {
    return axios.get(`/publicacoes/build_graphic?${queryParams}`);
  },
  getTotalArticlesPerInstitute() {
    return axios.get('/publicacoes/institutos_federais_do_norte_e_nordeste');
  },
  getArticlesCount(queryParams) {
    return axios.get(`/publicacoes/articles_count?${queryParams}`);
  },
};
