import axios from 'axios';
import url from './url';

const api = axios.create({
  baseURL: url.BASE_URL,
});

// Hàm để thêm token vào header Authorization
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

api.interceptors.request.use((config) => { 
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
      
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  

export default api;
