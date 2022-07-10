import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courseList: [],
  courseMenu: [],
  categories: [],
  course: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalCount: 0,
  success: null,
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
        error: null,
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
    // Lay thong tin khoa hoc
    getCourseSuccess: (state, action) => {
      return {
        ...state,
        course: action.payload,
      };
    },
    getCourseFail: (state, action) => {
      state.error = action.payload;
    },

    courseRegisterHandle: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },

    courseRegisterSuccess: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    courseRegisterFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // them khoa hoc
    getAddCourseSuccess: (state, action) => {
      return {
        ...state,
        success: action.payload,
      };
    },
    getAddCourseFail: (state, action) => {
      state.error = action.payload;
    },

    // xoa khoa hoc
    getDeleteCourseSuccess: (state) => {
      return {
        ...state,
        success: 'Xoa Thanh Cong!',
      };
    },
    getDeleteCourseFail: (state, action) => {
      state.error = action.payload;
    },

    // sua khoa hoc
    getUpdateCourseSuccess: (state) => {
      return {
        ...state,
        success: 'Sua Thanh Cong!',
      };
    },
    getUpdateCourseFail: (state, action) => {
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
  getCourseSuccess,
  getCourseFail,
  courseRegisterHandle,
  courseRegisterSuccess,
  courseRegisterFail,
  getAddCourseSuccess,
  getAddCourseFail,
  getDeleteCourseSuccess,
  getDeleteCourseFail,
  getUpdateCourseSuccess,
  getUpdateCourseFail,
} = courseSlice.actions;

export default courseSlice.reducer;
