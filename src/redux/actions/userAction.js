import { handleResponseApi } from 'src/helpers/parse';
import authApi from 'src/services/api/authApi';

import { getUserFail, getUserSuccess } from '../reducers/userReducer';

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
