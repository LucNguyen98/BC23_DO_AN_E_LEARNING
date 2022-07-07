import React from 'react';
import { Navigate } from 'react-router-dom';
import { LOGIN_PATH } from 'src/constants/pathName';
import { getUser } from 'src/helpers/localStorage';

export default function PrivateAdminRoute({ children }) {
  const user = getUser();
  if (user && user.maLoaiNguoiDung === 'GV') {
    return children;
  }
  return <Navigate to={LOGIN_PATH} />;
}
