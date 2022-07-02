import { createSlice } from '@reduxjs/toolkit';
import { removeUser, setUser } from 'src/helpers/localStorage';

const initialState = {
  loading: false,
  users: [],
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginHandle: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      setUser(action.payload);
      state.loading = false;
    },
    loginFail: (state) => {
      state.loading = false;
    },
    registerHandle: (state) => {
      state.loading = true;
    },
    registerSuccess: (state) => {
      state.loading = false;
    },
    registerFail: (state) => {
      state.loading = false;
    },

    updateUserHandle: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state) => {
      state.loading = false;
    },
    updateUserFail: (state) => {
      state.loading = false;
    },

    getProfileHandle: (state) => {
      state.loading = true;
    },
    getProfileSuccess: (state, action) => {
      setUser(action.payload);
      state.loading = false;
    },
    getProfileFail: (state) => {
      state.loading = false;
    },
    logOutHandle: () => {
      removeUser();
    },
  },
});

export const {
  loginHandle,
  loginSuccess,
  loginFail,
  registerHandle,
  registerSuccess,
  registerFail,
  logOutHandle,
  updateUserHandle,
  updateUserSuccess,
  updateUserFail,
  getProfileHandle,
  getProfileSuccess,
  getProfileFail,
} = authReducer.actions;

export default authReducer.reducer;
