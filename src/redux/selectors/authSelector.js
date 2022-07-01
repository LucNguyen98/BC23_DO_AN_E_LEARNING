import { createSelector } from 'reselect';

export const loadingSelector = (state) => state.auth.loading;

export const instructorsSelector = createSelector(
  [(state) => state.auth.users],
  (users) => {
    return users?.filter((user) => user.maLoaiNguoiDung === 'GV') || [];
  }
);
