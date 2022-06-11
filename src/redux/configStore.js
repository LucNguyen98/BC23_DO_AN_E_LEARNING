import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
const middleWare = [thunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWare),
});
