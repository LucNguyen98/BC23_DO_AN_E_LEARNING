import { default as axiosInstance } from 'src/utils/apiUtil';

const courseApi = {
  layDanhSachKhoaHoc: (params, headers) => {
    const endPoint = '/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc';
    return axiosInstance.get(endPoint, {
      params,
      headers,
    });
  },
};

export default courseApi;
