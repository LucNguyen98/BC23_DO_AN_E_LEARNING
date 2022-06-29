import { handleResponseApi } from 'src/helpers/parse';
import authApi from 'src/services/api/authApi';
import Swal from 'sweetalert2';
import {
  loginFail,
  loginHandle,
  loginSuccess,
  registerFail,
  registerHandle,
  registerSuccess,
} from '../reducers/authReducer';

export const loginAction = (data, onSuccess) => async (dispatch) => {
  try {
    dispatch(loginHandle());
    const result = await authApi.dangNhap(data);
    const { data: dataResp, error } = handleResponseApi(result);
    if (dataResp) {
      dispatch(loginSuccess(dataResp));
      onSuccess?.();
    }
    if (error) {
      dispatch(loginFail(error));
      Swal.fire({
        icon: 'error',
        title: 'Có lỗi xảy ra',
        text: error,
      });
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
      onSuccess?.();
      Swal.fire({
        icon: 'success',
        title: 'Đăng ký tài khoản thành công',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (error) {
      dispatch(registerFail(error));
      Swal.fire({
        icon: 'error',
        title: 'Có lỗi xảy ra',
        text: error,
      });
    }
  } catch (error) {
    dispatch(registerFail(error));
  }
};
