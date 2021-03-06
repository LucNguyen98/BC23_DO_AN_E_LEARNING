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
  xoadNguoiDung: (params) => {
    const endPoint = '/api/QuanLyNguoiDung/XoaNguoiDung';
    return axiosInstance.delete(endPoint, {
      params,
    });
  },
  themNguoiDung: (data) => {
    const endPoint = '/api/QuanLyNguoiDung/ThemNguoiDung';
    return axiosInstance.post(endPoint, data);
  },
  LayDanhSachNguoiDungChuaGhiDanh: (data) => {
    const endPoint = '/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh';
    return axiosInstance.post(endPoint, data);
  },
  LayDanhSachHocVienChoXetDuyet: (data) => {
    const endPoint = '/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet';
    return axiosInstance.post(endPoint, data);
  },
  LayDanhSachHocVienKhoaHoc: (data) => {
    const endPoint = '/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc';
    return axiosInstance.post(endPoint, data);
  },
};

export default authApi;
