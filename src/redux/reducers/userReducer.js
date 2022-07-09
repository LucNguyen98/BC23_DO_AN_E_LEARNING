import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errors: null,
  users: [],
  currentPage: 1,
  totalCount: 0,
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
  },
});

export const { getUserSuccess, getUserFail, getUserByPaginationSuccess } =
  userReducer.actions;

export default userReducer.reducer;
