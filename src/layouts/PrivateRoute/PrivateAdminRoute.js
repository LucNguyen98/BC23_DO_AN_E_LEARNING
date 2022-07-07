import React from 'react';
import { Navigate } from 'react-router-dom';
import { LOGIN_PATH } from 'src/constants/pathName';
import { getUser } from 'src/helpers/localStorage';

export default function PrivateAdminRoute({ children, isRequired = true }) {
  const user = getUser();
  if (!isRequired || (user && user.maLoaiNguoiDung === 'GV')) {
    return children;
  }
  return <Navigate to={LOGIN_PATH} />;
}
