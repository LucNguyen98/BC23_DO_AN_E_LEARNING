import React from 'react';
import { NavLink } from 'react-router-dom';
import { createClass } from 'src/utils/utils';
import './style.scss';
export default function NavLinkComponent({
  activeClassName: activeClassNameCustom = '',
  inActiveColor = false,
  children,
  ...props
}) {
  return (
    <NavLink
      activeClassName={createClass([
        inActiveColor ? '' : 'active',
        activeClassNameCustom,
      ])}
      {...props}
    >
      {children}
    </NavLink>
  );
}
