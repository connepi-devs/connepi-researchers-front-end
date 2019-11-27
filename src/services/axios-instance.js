import axios from 'axios';

export const baseURL = process.env.VUE_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: `${baseURL}/api/v1/`,
  timeout: 30000,
  headers: {
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    uid: localStorage.getItem('uid'),
  },
});
