import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://192.168.15.15:3333',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Beared ${token}`;
  }

  return config;
});

export default api;