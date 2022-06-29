import { createSlice } from '@reduxjs/toolkit';
import { removeUser, setUser } from 'src/helpers/localStorage';

const initialState = {
  loading: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginHandle: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      console.log(action.payload);
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
} = authReducer.actions;

export default authReducer.reducer;
