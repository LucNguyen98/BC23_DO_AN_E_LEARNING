import courseApi from 'src/services/api/courseApi';

// eslint-disable-next-line no-unused-vars
export const getCourseAction = (params) => async (dispatch, getState) => {
  try {
    const result = await courseApi.layDanhSachKhoaHoc(params);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
