import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countReducer';
import courseReducer from './courseReducer';
import authReducer from './authReducer';
export const rootReducer = combineReducers({
  counter: countReducer,
  course: courseReducer,
  auth: authReducer,
});
