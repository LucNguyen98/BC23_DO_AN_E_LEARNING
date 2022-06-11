import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countReducer';
export const rootReducer = combineReducers({
  counter: countReducer,
});
