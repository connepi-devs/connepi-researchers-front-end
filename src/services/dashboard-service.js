import { axiosInstance } from './axios-instance';

const axios = axiosInstance;

export default {
  getArticlesPerInstitutePerAreaPerYear(queryParams) {
    return axios.get(`publications/build_graphic?${queryParams}`);
  },
  getTotalArticlesPerInstitute() {
    return axios.get('publications/institutos_federais_do_norte_e_nordeste');
  },
  getArticlesCount(queryParams) {
    return axios.get(`publications/articles_count?${queryParams}`);
  },
};
