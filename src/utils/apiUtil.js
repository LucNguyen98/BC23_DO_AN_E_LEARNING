import axios from 'axios';
import { BASE_URL, REQUEST_TIMEOUT, TOKEN_CYBERSOFT } from 'src/constants';
import { getUser } from 'src/helpers/localStorage';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

// Xử lý trước khi thực hiện request
axiosInstance.interceptors.request.use((configs) => {
  let user = getUser();

  configs.headers['Content-Type'] = 'application/json';
  configs.headers.TokenCybersoft = TOKEN_CYBERSOFT;

  //Check access token
  if (user?.accessToken) {
    configs.headers['Authorization'] = `Bearer ${user?.accessToken}`;
  }
  return configs;
});

// Xử lý sau khi nhận response
axiosInstance.interceptors.response.use(
  (configs) => {
    return configs;
  },
  (errors) => {
    return errors.response;
  }
);

export default axiosInstance;
