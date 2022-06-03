import axios from 'axios';

const api = axios.create({
  baseURL: 'https://paguru-restaurant-api.herokuapp.com'
});


export default api;