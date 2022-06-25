import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courseList: [],
  categories: [],
  isLoading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    // Lấy danh sách khoá học
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
    getCourseListFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Lấy danh mục khoá học
    getCategoriesSuccess: (state, action) => {
      return {
        ...state,
        categories: action.payload,
      };
    },
    getCategoriesFail: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  getCourseListHandle,
  getCourseListSuccess,
  getCourseListFail,
  getCategoriesSuccess,
  getCategoriesFail,
} = courseSlice.actions;

export default courseSlice.reducer;
