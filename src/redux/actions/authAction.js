import { SUBMIT_ERROR } from 'src/constants/error';
import { SUBMIT_SUCCESS } from 'src/constants/success';
import { handleResponseApi } from 'src/helpers/parse';
import authApi from 'src/services/api/authApi';
import Swal from 'sweetalert2';
import {
  getProfileFail,
  getProfileHandle,
  getProfileSuccess,
  loginFail,
  loginHandle,
  loginSuccess,
  registerFail,
  registerHandle,
  registerSuccess,
  updateUserFail,
  updateUserHandle,
} from '../reducers/authReducer';

export const loginAction = (data, onSuccess) => async (dispatch) => {
  try {
    dispatch(loginHandle());
    const result = await authApi.dangNhap(data);

    const { data: dataResp, error } = handleResponseApi(result);
    if (dataResp) {
      dispatch(loginSuccess(dataResp));
      onSuccess?.(dataResp);
    }
    if (error) {
      dispatch(loginFail(error));
      Swal.fire({ ...SUBMIT_ERROR, text: error });
    }
  } catch (error) {
    dispatch(loginFail(error));
  }
};

export const registerAction = (data, onSuccess) => async (dispatch) => {
  try {
    dispatch(registerHandle());
    const result = await authApi.dangKy(data);
    const { data: dataResp, error } = handleResponseApi(result);
    if (dataResp) {
      dispatch(registerSuccess(dataResp));
      Swal.fire({
        ...SUBMIT_SUCCESS,
        title: 'Đăng ký tài khoản thành công',
        confirmButtonText: 'Đăng nhập ngay',
      }).then((result) => {
        if (result.isConfirmed) {
          onSuccess?.();
        }
      });
    }
    if (error) {
      dispatch(registerFail(error));
      Swal.fire({ ...SUBMIT_ERROR, text: error });
    }
  } catch (error) {
    dispatch(registerFail(error));
  }
};

export const updateUserAction = (data, onSuccess) => async (dispatch) => {
  try {
    dispatch(updateUserHandle());
    const result = await authApi.capNhatThongTinNguoiDung(data);
    const { data: dataResp, error } = handleResponseApi(result);
    if (dataResp) {
      Swal.fire({
        ...SUBMIT_SUCCESS,
        title: 'Cập nhật thành công',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
          onSuccess?.();
        }
      });
    }
    if (error) {
      dispatch(updateUserFail(error));
      Swal.fire({ ...SUBMIT_ERROR, text: error });
    }
  } catch (error) {
    dispatch(updateUserFail(error));
  }
};

export const getProfileAction = () => async (dispatch) => {
  try {
    dispatch(getProfileHandle());
    const result = await authApi.layThongTinNguoiDung();
    const { data, error } = handleResponseApi(result);
    if (data) {
      dispatch(getProfileSuccess(data));
    }
    if (error) {
      dispatch(getProfileFail(error));
    }
  } catch (error) {
    dispatch(updateUserFail(error));
  }
};
