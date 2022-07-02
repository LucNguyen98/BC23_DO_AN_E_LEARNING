import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courseList: [],
  courseMenu: [],
  categories: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalCount: 0,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    // Lấy danh sách khoá học phân trang
    getCourseListHandle: (state) => {
      state.isLoading = true;
    },
    getCourseListSuccess: (state, action) => {
      const { currentPage, totalCount, items } = action.payload;
      return {
        ...state,
        isLoading: false,
        courseList: items,
        currentPage,
        totalCount,
      };
    },
    getCourseListFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Lấy danh sách khoá học menu
    getCourseMenuSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        courseMenu: action.payload,
      };
    },
    getCourseMenuFail: (state, action) => {
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
    // Lấy danh mục khoá học
    getCourseByCategorySuccess: (state, action) => {
      return {
        ...state,
        courseList: action.payload,
        totalCount: 1,
      };
    },
    getCourseByCategoryFail: (state, action) => {
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
  getCourseByCategorySuccess,
  getCourseByCategoryFail,
  getCourseMenuSuccess,
  getCourseMenuFail,
} = courseSlice.actions;

export default courseSlice.reducer;
