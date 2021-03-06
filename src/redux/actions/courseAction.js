import { DELETE_COURSE_ERROR, SUBMIT_ERROR } from 'src/constants/error';
import { SUBMIT_SUCCESS } from 'src/constants/success';
import { handleResponseApi } from 'src/helpers/parse';
import courseApi from 'src/services/api/courseApi';
import Swal from 'sweetalert2';
import {
  courseCancelFail,
  courseCancelHandle,
  courseCancelSuccess,
  courseRegisterFail,
  courseRegisterHandle,
  courseRegisterSuccess,
  getAddCourseFail,
  getAddCourseSuccess,
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
  getDeleteCourseFail,
  getDeleteCourseSuccess,
  getUpdateCourseFail,
  getUpdateCourseSuccess,
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
    console.log(params);
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

export const courseRegisterAction = (data, onSuccess) => async (dispatch) => {
  try {
    dispatch(courseRegisterHandle());
    const result = await courseApi.ghiDanhKhoaHoc(data);
    const { data: dataResp, error } = handleResponseApi(result);
    if (dataResp) {
      dispatch(courseRegisterSuccess(dataResp));
      Swal.fire({
        ...SUBMIT_SUCCESS,
        title: 'B???N ???? ????NG K?? TH??NH C??NG!',
        text: 'CH??NG T??I S??? LI??N H??? B???N S???M NH???T. C???M ??N B???N',
        confirmButtonText: 'Tr??? v???',
      }).then((result) => {
        if (result.isConfirmed) {
          onSuccess?.();
        }
      });
    }
    if (error) {
      dispatch(courseRegisterFail(error));
      Swal.fire(SUBMIT_ERROR);
    }
  } catch (error) {
    dispatch(courseRegisterFail(error));
  }
};

export const addCourseAction = (postData, onSuccess) => async (dispatch) => {
  try {
    dispatch(courseRegisterHandle());
    const result = await courseApi.themKhoaHoc(postData);
    const { data: dataResp, error } = handleResponseApi(result);
    if (dataResp) {
      Swal.fire({
        ...SUBMIT_SUCCESS,
        title: 'T???o kh??a h???c th??nh c??ng',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
          onSuccess?.();
        }
      });
    }
    if (error) {
      dispatch(getAddCourseFail(error));
      Swal.fire({ ...SUBMIT_ERROR, text: error });
    }
  } catch (error) {
    dispatch(getAddCourseFail(error));
  }
};

export const deleteCourseAction =
  (maKhoaHoc, onSuccess) => async (dispatch) => {
    try {
      dispatch(courseRegisterHandle());
      const result = await courseApi.xoaKhoaHoc({ maKhoaHoc });
      const { data: dataResp, error } = handleResponseApi(result);
      if (dataResp) {
        Swal.fire({
          ...SUBMIT_SUCCESS,
          title: 'X??a th??nh c??ng',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
            onSuccess?.();
          }
        });
      }
      if (error) {
        dispatch(getDeleteCourseFail(error));
        Swal.fire(DELETE_COURSE_ERROR(error));
      }
    } catch (error) {
      dispatch(getDeleteCourseFail(error));
    }
  };

export const updateCourseAction = (postData, onSuccess) => async (dispatch) => {
  try {
    dispatch(courseRegisterHandle());
    const result = await courseApi.suaKhoaHoc(postData);
    const { data: dataResp, error } = handleResponseApi(result);
    if (dataResp) {
      Swal.fire({
        ...SUBMIT_SUCCESS,
        title: 'C???p nh???t th??nh c??ng',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
          onSuccess?.();
        }
      });
    }
    if (error) {
      dispatch(getUpdateCourseFail(error));
      Swal.fire(SUBMIT_ERROR);
    }
  } catch (error) {
    dispatch(getUpdateCourseFail(error));
  }
};

export const courseCancelAction = (data, onSuccess) => async (dispatch) => {
  try {
    dispatch(courseCancelHandle());
    const result = await courseApi.huyGhiDanh(data);
    const { data: dataResp, error } = handleResponseApi(result);
    if (dataResp) {
      dispatch(courseCancelSuccess(dataResp));
      Swal.fire({
        ...SUBMIT_SUCCESS,
        title: 'HU??? GHI DANH TH??NH C??NG!',
        confirmButtonText: 'Tr??? v???',
      }).then((result) => {
        if (result.isConfirmed) {
          onSuccess?.();
        }
      });
    }
    if (error) {
      dispatch(courseCancelFail(error));
      Swal.fire(SUBMIT_ERROR);
    }
  } catch (error) {
    dispatch(courseRegisterFail(error));
  }
};
