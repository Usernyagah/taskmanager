import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taskmanager-5-fs72.onrender.com/',
});

export default api;
