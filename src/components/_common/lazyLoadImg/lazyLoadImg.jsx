import React from 'react';
import LazyLoad from 'react-lazyload';
export default function LazyLoadImg({ src, width, height, ...props }) {
  return (
    <div className="wrapper">
      <LazyLoad
        throttle={1000}
        height={height}
        placeholder={
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height,
            }}
          >
            <div className="spinner-grow text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <img alt="" src={src} width={width} height={height} {...props} />
      </LazyLoad>
    </div>
  );
}
