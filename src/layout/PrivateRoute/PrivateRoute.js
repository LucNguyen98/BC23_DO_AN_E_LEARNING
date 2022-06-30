import React from 'react';
import { Redirect } from 'react-router-dom';
import { LOGIN_PATH } from 'src/constants/pathName';
import { getUser } from 'src/helpers/localStorage';

export default function PrivateRoute({ children }) {
  const user = getUser();
  if (user) {
    return children;
  }
  return <Redirect to={LOGIN_PATH} />;
}
