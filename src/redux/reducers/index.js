import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countReducer';
import courseReducer from './courseReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
export const rootReducer = combineReducers({
  counter: countReducer,
  course: courseReducer,
  auth: authReducer,
  user: userReducer,
});
