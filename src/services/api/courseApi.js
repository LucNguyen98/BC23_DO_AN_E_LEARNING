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
    console.log(axiosInstance.get(endPoint, { params, headers }));
    return axiosInstance.get(endPoint, {
      params,
      headers,
    });
  },
};

export default courseApi;
