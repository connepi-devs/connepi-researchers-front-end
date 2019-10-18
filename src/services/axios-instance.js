import axios from 'axios';

export const baseURL = process.env.VUE_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 30000,
});
