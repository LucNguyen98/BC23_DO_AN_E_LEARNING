import { SUBMIT_ERROR } from 'src/constants/error';
import { SUBMIT_SUCCESS } from 'src/constants/success';
import { handleResponseApi } from 'src/helpers/parse';
import authApi from 'src/services/api/authApi';
import Swal from 'sweetalert2';

import {
  addUserFail,
  addUserHandle,
  addUserSuccess,
  getUserByPaginationSuccess,
  getUserFail,
  getUserSuccess,
  removeUserFail,
  removeUserHandle,
  removeUserSuccess,
} from '../reducers/userReducer';

export const getUserAction = (params) => async (dispatch) => {
  try {
    const result = await authApi.layDanhSachNguoiDung(params);
    const { data, error } = handleResponseApi(result);
    if (data) {
      dispatch(getUserSuccess(data));
    }
    if (error) {
      dispatch(getUserFail(error));
    }
  } catch (error) {
    dispatch(getUserFail(error));
  }
};

export const getUserPaginationAction = (params) => async (dispatch) => {
  try {
    const result = await authApi.layDanhSachNguoiDungPhanTrang(params);
    const { data, error } = handleResponseApi(result);
    if (data) {
      dispatch(getUserByPaginationSuccess(data));
    }
    if (error) {
      dispatch(getUserFail(error));
    }
  } catch (error) {
    dispatch(getUserFail(error));
  }
};

export const deleteUserAction = (taiKhoan) => async (dispatch) => {
  try {
    dispatch(removeUserHandle());
    const result = await authApi.xoadNguoiDung({ taiKhoan });
    const { data, error } = handleResponseApi(result);
    if (data) {
      dispatch(removeUserSuccess());
      Swal.fire({
        ...SUBMIT_SUCCESS,
        title: 'Xoá thành công!',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }
    if (error) {
      dispatch(removeUserFail(error));
      Swal.fire({ ...SUBMIT_ERROR, text: error });
    }
  } catch (error) {
    dispatch(removeUserFail(error));
  }
};

export const addUserAction = (data, onSuccess) => async (dispatch) => {
  try {
    dispatch(addUserHandle());
    const result = await authApi.themNguoiDung(data);
    const { data: dataRes, error } = handleResponseApi(result);
    if (dataRes) {
      dispatch(addUserSuccess());
      Swal.fire({
        ...SUBMIT_SUCCESS,
        title: 'Tạo mới thành công!',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          onSuccess?.();
        }
      });
    }
    if (error) {
      dispatch(addUserFail(error));
      Swal.fire({ ...SUBMIT_ERROR, text: error });
    }
  } catch (error) {
    dispatch(addUserFail(error));
  }
};
