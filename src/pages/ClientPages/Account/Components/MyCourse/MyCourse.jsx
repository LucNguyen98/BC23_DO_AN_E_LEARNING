import React from 'react';
import { LazyLoadImg, NavLinkComponent } from 'src/components';
import { COURSE_PATH } from 'src/constants/pathName';

function MyCourse({ data }) {
  const renderCourse = (course, index) => {
    const desConvert =
      course?.moTa?.length > 50
        ? `${course?.moTa?.slice(0, 50)}...`
        : course?.moTa;
    return (
      <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
        <div className="course-grid bg-shadow tooltip-style">
          <div className="course-header">
            <div className="course-thumb">
              <LazyLoadImg
                src={course?.hinhAnh}
                alt=""
                height={200}
                style={{
                  width: '100%',
                  objectFit: 'fill',
                }}
              />
            </div>
          </div>
          <div className="course-content">
            <div className="rating mb-10">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <span>
                {5} ({course.luotXem} đánh giá)
              </span>
            </div>
            <h3 className="course-title mb-20">{course?.tenKhoaHoc}</h3>
            <p className="mb-20">{desConvert}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderPages = () => {
    if (data?.length > 0)
      return data?.map((course, index) => renderCourse(course, index));
    return (
      <div
        className="text-center"
        style={{
          width: '100%',
          marginTop: '10%',
        }}
      >
        <p>Bạn chưa đăng ký khoá học nào!</p>
        <NavLinkComponent to={COURSE_PATH}>Đăng ký ngay</NavLinkComponent>
      </div>
    );
  };

  return (
    <div className="p-3 py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-right">Khoá học của tôi</h4>
      </div>
      <div className="row·justify-content-lg-center">
        <div className="row">{renderPages()}</div>
      </div>
    </div>
  );
}

export default React.memo(MyCourse);
