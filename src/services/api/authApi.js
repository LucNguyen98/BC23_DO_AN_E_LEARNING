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
  capNhatThongTinNguoiDung: (data) => {
    const endPoint = '/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung';
    return axiosInstance.put(endPoint, data);
  },
  layThongTinNguoiDung: () => {
    const endPoint = '/api/QuanLyNguoiDung/ThongTinNguoiDung';
    return axiosInstance.post(endPoint);
  },
  layDanhSachNguoiDung: (params) => {
    const endPoint = '/api/QuanLyNguoiDung/LayDanhSachNguoiDung';
    return axiosInstance.get(endPoint, { params });
  },
  layDanhSachNguoiDungPhanTrang: (params) => {
    const endPoint = '/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang';
    return axiosInstance.get(endPoint, { params });
  },
};

export default authApi;
