import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courseList: [],
  isLoading: false,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getCourseListHandle: (state) => {
      state.isLoading = true;
    },
    getCourseListSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        courseList: action.payload,
      };
    },

    getCourseListFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCourseListHandle, getCourseListSuccess, getCourseListFail } =
  courseSlice.actions;

export default courseSlice.reducer;
