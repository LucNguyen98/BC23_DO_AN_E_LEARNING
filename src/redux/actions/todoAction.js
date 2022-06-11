import courseApi from 'src/services/api/courseApi';
import {
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
    console.log(error);
  }
};
