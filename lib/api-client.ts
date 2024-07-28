import axios from 'axios';
const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL, 
});

console.log('process.env.API_BASE_URL', process.env.API_BASE_URL);

if (typeof window !== 'undefined') {
  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      console.log('token', token);
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default apiClient;
