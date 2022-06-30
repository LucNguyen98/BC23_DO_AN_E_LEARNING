import { USER } from 'src/constants';

export const setUser = (value) => {
  const currentUser = getUser();
  const newUser = currentUser ? Object.assign({}, currentUser, value) : value;
  console.log('newUser', newUser);
  window.localStorage.setItem(USER, JSON.stringify(newUser));
};

export const getUser = () => {
  let data = window.localStorage.getItem(USER);
  return data ? JSON.parse(data) : '';
};

export const removeUser = () => {
  window.localStorage.removeItem(USER);
};
