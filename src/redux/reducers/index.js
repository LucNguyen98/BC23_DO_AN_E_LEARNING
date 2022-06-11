import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countReducer';
import courseReducer from './courseReducer';
export const rootReducer = combineReducers({
  counter: countReducer,
  course: courseReducer,
});
