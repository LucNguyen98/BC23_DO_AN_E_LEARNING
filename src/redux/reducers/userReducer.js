import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errors: null,
  users: [],
  currentPage: 1,
  totalCount: 0,
  loading: false,
  userNotRegister: [],
  members: [],
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserSuccess: (state, action) => {
      state.users = action.payload;
      state.errors = null;
    },
    getUserByPaginationSuccess: (state, action) => {
      const { items, totalCount, currentPage } = action.payload || {};
      return {
        ...state,
        users: items,
        errors: null,
        totalCount,
        currentPage,
      };
    },
    getUserFail: (state, action) => {
      state.errors = action.payload;
    },

    removeUserHandle: (state) => {
      state.loading = true;
    },
    removeUserSuccess: (state) => {
      state.loading = false;
    },
    removeUserFail: (state) => {
      state.loading = false;
    },

    addUserHandle: (state) => {
      state.loading = true;
    },
    addUserSuccess: (state) => {
      state.loading = false;
    },
    addUserFail: (state) => {
      state.loading = false;
    },

    getStudentSuccess: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        userNotRegister: data[0],
        members: data[1] ?? [],
      };
    },
    getStudentFail: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const {
  getUserSuccess,
  getUserFail,
  getUserByPaginationSuccess,
  removeUserHandle,
  removeUserSuccess,
  removeUserFail,
  addUserHandle,
  addUserSuccess,
  addUserFail,
  getStudentSuccess,
  getStudentFail,
} = userReducer.actions;

export default userReducer.reducer;
