import { handleResponseApi } from 'src/helpers/parse';
import courseApi from 'src/services/api/courseApi';
import {
  getCategoriesFail,
  getCategoriesSuccess,
  getCourseByCategoryFail,
  getCourseByCategorySuccess,
  getCourseFail,
  getCourseListFail,
  getCourseListHandle,
  getCourseListSuccess,
  getCourseMenuFail,
  getCourseMenuSuccess,
  getCourseSuccess,
} from '../reducers/courseReducer';

// eslint-disable-next-line no-unused-vars
export const getCourseListAction = (params) => async (dispatch) => {
  try {
    dispatch(getCourseListHandle());
    const result = await courseApi.layDanhSachKhoaHocPhanTrang(params);
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

export const getCourseMenuAction = (params) => async (dispatch) => {
  try {
    const result = await courseApi.layDanhSachKhoaHoc(params);
    const { data, error } = handleResponseApi(result);
    if (data) {
      return dispatch(getCourseMenuSuccess(data));
    }
    if (error) {
      return dispatch(getCourseMenuFail(error));
    }
  } catch (error) {
    dispatch(getCourseMenuFail());
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

export const getCourseDetail = (params) => async (dispatch) => {
  try {
    const result = await courseApi.layThongTinKhoaHoc(params);
    const { data, error } = handleResponseApi(result);
    if (data) {
      return dispatch(getCourseSuccess(data));
    }
    if (error) {
      return dispatch(getCourseFail(error));
    }
  } catch (error) {
    dispatch(getCourseFail(error));
  }
};
