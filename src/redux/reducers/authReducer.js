import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginHandle: () => {},
    registerHandle: (state) => {
      state.loading = true;
    },
    registerSuccess: (state) => {
      state.loading = false;
    },
    registerFail: (state) => {
      state.loading = false;
    },
  },
});

export const { loginHandle, registerHandle, registerSuccess, registerFail } =
  authReducer.actions;

export default authReducer.reducer;
