import React from 'react';
import PropTypes from 'prop-types';

import { createClass } from 'src/utils/utils';
import './button.scss';
export default function Button({
  title = '',
  customClass,
  onClick,
  disabled,
  outline,
  radius,
}) {
  const onHandleClick = () => {
    if (typeof onClick !== 'function') return;
    onClick();
  };

  return (
    <button
      disabled={disabled}
      className={createClass([
        'btn',
        customClass,
        outline ? 'btn-main-outline' : 'btn-main',
        radius ? 'btn-radius' : '',
      ])}
      onClick={onHandleClick}
    >
      <span>{title}</span>
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  customClass: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  radius: PropTypes.bool,
};
