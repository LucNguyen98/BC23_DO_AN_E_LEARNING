import { ReactComponent as LogoDark } from '../assets/images/logos/adminpro.svg';
import { Link } from 'react-router-dom';
import React from 'react';
const Logo = () => {
  return (
    <Link to="/">
      <LogoDark />
    </Link>
  );
};

export default Logo;
