import { combineReducers } from '@reduxjs/toolkit';
import courseReducer from './courseReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
export const rootReducer = combineReducers({
  course: courseReducer,
  auth: authReducer,
  user: userReducer,
});
