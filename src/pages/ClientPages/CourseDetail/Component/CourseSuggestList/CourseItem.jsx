import React from 'react';
import { LazyLoadImg, NavLinkComponent } from 'src/components';
import { COURSE_DETAIL_PATH } from 'src/constants/pathName';

function CourseItem({ item }) {
  const { tenKhoaHoc, hinhAnh, maKhoaHoc } = item || {};
  return (
    <li>
      <div className="widget-post-thumb">
        <a href="#">
          <LazyLoadImg className="img-fluid" src={hinhAnh} alt="" />
        </a>
      </div>
      <div className="widget-post-body">
        <h6>
          {' '}
          <NavLinkComponent to={`${COURSE_DETAIL_PATH}/${maKhoaHoc}`}>
            {tenKhoaHoc}
          </NavLinkComponent>
        </h6>
        <h5>$120</h5>
      </div>
    </li>
  );
}

export default React.memo(CourseItem);
