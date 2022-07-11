import { default as axiosInstance } from 'src/utils/apiUtil';

const courseApi = {
  layDanhSachKhoaHoc: (params, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc';
    return axiosInstance.get(endPoint, {
      params,
      headers,
    });
  },
  layDanhMucKhoaHoc: (params, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc';
    return axiosInstance.get(endPoint, {
      params,
      headers,
    });
  },
  LayKhoaHocTheoDanhMuc: (params, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc';
    console.log(params);
    return axiosInstance.get(endPoint, {
      params,
      headers,
    });
  },
  layDanhSachKhoaHocPhanTrang: (params, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang';
    return axiosInstance.get(endPoint, {
      params,
      headers,
    });
  },
  layThongTinKhoaHoc: (params, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/LayThongTinKhoaHoc';
    return axiosInstance.get(endPoint, {
      params,
      headers,
    });
  },
  ghiDanhKhoaHoc: (data, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/DangKyKhoaHoc';
    return axiosInstance.post(endPoint, data, { headers });
  },
  themKhoaHoc: (data, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/ThemKhoaHoc';
    return axiosInstance.post(endPoint, data, { headers });
  },
  xoaKhoaHoc: (params, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/XoaKhoaHoc';
    return axiosInstance.delete(endPoint, { params, headers });
  },
  suaKhoaHoc: (data, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/CapNhatKhoaHoc';
    return axiosInstance.put(endPoint, data, { headers });
  },
};

export default courseApi;
