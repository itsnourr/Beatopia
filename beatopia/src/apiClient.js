import axios from 'axios';
import { isTokenExpired } from './utils/tokenUtils'; // Adjust the path as necessary

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (isTokenExpired(token)) {
    // Redirect to login if token is expired
    window.location.href = '/login';
    return Promise.reject(new Error('Token expired'));
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));
apiClient.interceptors.response.use(
    (response) => response, // Pass through successful responses
    (error) => {
      if (error.response && error.response.status === 401) {
        console.warn("Session expired. Redirecting to login...");
        window.location.href = '/login'; // Redirect to login
      }
      return Promise.reject(error); // Forward the error for further handling
    }
  );

export default apiClient;