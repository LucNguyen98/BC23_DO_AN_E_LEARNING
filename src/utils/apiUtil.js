import axios from 'axios';
import { BASE_URL, REQUEST_TIMEOUT, TOKEN_CYBERSOFT } from 'src/constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

// Xử lý trước khi thực hiện request
axiosInstance.interceptors.request.use((configs) => {
  configs.headers['Content-Type'] = 'application/json';
  configs.headers.TokenCybersoft = TOKEN_CYBERSOFT;
  return configs;
});

// Xử lý sau khi nhận response
axiosInstance.interceptors.response.use(
  (configs) => {
    return configs.data;
  },
  (errors) => {
    return errors;
  }
);

export default axiosInstance;
