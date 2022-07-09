import { handleResponseApi } from 'src/helpers/parse';
import authApi from 'src/services/api/authApi';

import {
  getUserByPaginationSuccess,
  getUserFail,
  getUserSuccess,
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
