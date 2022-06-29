import { USER } from 'src/constants';

export const setUser = (value) => {
  window.localStorage.setItem(USER, JSON.stringify(value));
};

export const getUser = () => {
  let data = window.localStorage.getItem(USER);
  return data ? JSON.parse(data) : '';
};

export const removeUser = () => {
  window.localStorage.removeItem(USER);
};
