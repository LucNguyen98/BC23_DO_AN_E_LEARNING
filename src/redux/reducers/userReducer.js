import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errors: null,
  users: [],
  currentPage: 1,
  totalCount: 0,
  loading: false,
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
} = userReducer.actions;

export default userReducer.reducer;
