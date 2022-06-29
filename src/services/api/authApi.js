import { default as axiosInstance } from 'src/utils/apiUtil';

const authApi = {
  dangKy: (data) => {
    const endPoint = '/api/QuanLyNguoiDung/DangKy';
    return axiosInstance.post(endPoint, data);
  },
  dangNhap: (data) => {
    const endPoint = '/api/QuanLyNguoiDung/DangNhap';
    return axiosInstance.post(endPoint, data);
  },
};

export default authApi;
