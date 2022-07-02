import { handleResponseApi } from 'src/helpers/parse';
import courseApi from 'src/services/api/courseApi';
import {
  getCategoriesFail,
  getCategoriesSuccess,
  getCourseByCategoryFail,
  getCourseByCategorySuccess,
  getCourseListFail,
  getCourseListHandle,
  getCourseListSuccess,
} from '../reducers/courseReducer';

// eslint-disable-next-line no-unused-vars
export const getCourseListAction = (params) => async (dispatch) => {
  try {
    dispatch(getCourseListHandle());
    const result = await courseApi.layDanhSachKhoaHoc(params);
    const { data, error } = handleResponseApi(result);
    if (data) {
      return dispatch(getCourseListSuccess(data));
    }
    if (error) {
      return dispatch(getCourseListFail(error));
    }
  } catch (error) {
    dispatch(getCourseListFail());
  }
};

export const getCategoriesAction = (params) => async (dispatch) => {
  try {
    const result = await courseApi.layDanhMucKhoaHoc(params);
    const { data, error } = handleResponseApi(result);
    if (data) {
      return dispatch(getCategoriesSuccess(data));
    }
    if (error) {
      return dispatch(getCategoriesFail(error));
    }
  } catch (error) {
    dispatch(getCategoriesFail(error));
  }
};

export const getCourseByCategoryAction = (params) => async (dispatch) => {
  try {
    const result = await courseApi.LayKhoaHocTheoDanhMuc(params);
    const { data, error } = handleResponseApi(result);
    if (data) {
      return dispatch(getCourseByCategorySuccess(data));
    }
    if (error) {
      return dispatch(getCourseByCategoryFail(error));
    }
  } catch (error) {
    dispatch(getCourseByCategoryFail(error));
  }
};
