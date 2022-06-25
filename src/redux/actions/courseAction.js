import courseApi from 'src/services/api/courseApi';
import {
  getCategoriesFail,
  getCategoriesSuccess,
  getCourseListFail,
  getCourseListHandle,
  getCourseListSuccess,
} from '../reducers/courseReducer';

// eslint-disable-next-line no-unused-vars
export const getCourseListAction = (params) => async (dispatch) => {
  try {
    dispatch(getCourseListHandle());
    const result = await courseApi.layDanhSachKhoaHoc(params);
    if (result) {
      dispatch(getCourseListSuccess(result));
    } else {
      dispatch(getCourseListFail());
    }
  } catch (error) {
    dispatch(getCourseListFail());
  }
};

export const getCategoriesAction = (params) => async (dispatch) => {
  try {
    const result = await courseApi.layDanhMucKhoaHoc(params);
    if (result) {
      dispatch(getCategoriesSuccess(result));
    } else {
      dispatch(getCourseListFail());
    }
  } catch (error) {
    console.log(error);
    dispatch(getCategoriesFail(error));
  }
};
