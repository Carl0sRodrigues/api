import axios from 'axios';

const api = axios.create({
  baseURL: 'https://paguru-restaurant-api.herokuapp.com'
});

api.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('@Restaurant:token');
    if (token !== null) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);


export default api;