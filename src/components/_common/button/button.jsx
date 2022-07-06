import React from 'react';
import PropTypes from 'prop-types';

import { createClass } from 'src/utils/utils';
import './button.scss';

const BUTTON_TYPE = {
  main: 'main',
  white: 'white',
  grey: 'grey',
};
export default function Button({
  title = '',
  customClass,
  onClick,
  disabled,
  outline,
  radius,
  icon,
  btnType = BUTTON_TYPE['main'],
  type,
  ...props
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
        outline ? `btn-${btnType}-outline` : `btn-${btnType}`,
        radius && 'btn-radius',
        disabled && 'btn-grey',
      ])}
      onClick={onHandleClick}
      type={type}
      {...props}
    >
      <div>
        {!!title && <span>{title}</span>}
        {icon && <span className="icon">{icon}</span>}
      </div>
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
  btnType: PropTypes.string,
  icon: PropTypes.element,
};
