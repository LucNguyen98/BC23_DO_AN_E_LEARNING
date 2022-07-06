import React from 'react';
import './PageNotFound.scss';
export default function PageNotFound() {
  return (
    <div>
      <div className="section-error">
        <div className="error-text">
          <img
            alt=""
            src="http://themeturn.com/wp-content/themes/eidmart/images/404.png"
            className="hvrbox-layer_bottom"
          />
          <h1>Oops! Page not found!</h1>
          <br />
          <br />
          <a href="" className="btn-hover color-1">
            <i className="fa fa-home" /> Trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}
