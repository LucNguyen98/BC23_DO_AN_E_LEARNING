import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errors: null,
  users: [],
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserSuccess: (state, action) => {
      state.users = action.payload;
      state.errors = null;
    },
    getUserFail: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { getUserSuccess, getUserFail } = userReducer.actions;

export default userReducer.reducer;
