import authApi from 'src/services/api/authApi';
import {
  loginHandle,
  registerFail,
  registerHandle,
  registerSuccess,
} from '../reducers/authReducer';

export const loginAction = (data) => async (dispatch) => {
  try {
    dispatch(loginHandle());
    const result = await authApi.dangNhap(data);
    if (result) {
      //   dispatch(getCourseListSuccess(result));
    } else {
      //   dispatch(getCourseListFail());
    }
  } catch (error) {
    // dispatch(getCourseListFail());
  }
};

export const registerAction = (data) => async (dispatch) => {
  try {
    dispatch(registerHandle());
    const result = await authApi.dangKy(data);
    if (result) {
      dispatch(registerSuccess(result));
    } else {
      dispatch(registerFail());
    }
    console.log(result);
  } catch (error) {
    console.log(error);
    dispatch(registerFail(error));
  }
};
