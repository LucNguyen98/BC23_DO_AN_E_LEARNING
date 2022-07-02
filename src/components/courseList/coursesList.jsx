import React from 'react';
import { Button } from '..';

function CoursesList({ courses = [] }) {
  const renderCourse = (course, index) => {
    const { nguoiTao } = course;
    const desConvert =
      course?.moTa?.length > 100
        ? `${course?.moTa?.slice(0, 100)}...`
        : course?.moTa;
    return (
      <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
        <div className="course-grid bg-shadow tooltip-style">
          <div className="course-header">
            <div className="course-thumb">
              <img
                src={course?.hinhAnh}
                alt=""
                style={{
                  width: '100%',
                  height: 200,
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
            <h3 className="course-title mb-20">
              {' '}
              <a href="">{course?.tenKhoaHoc}</a>{' '}
            </h3>
            <div className="course-footer mt-20 d-flex align-items-center justify-content-between ">
              <span className="duration">
                <i className="far fa-clock me-2" /> {course.hours} buổi
              </span>
              <span className="students">
                <i className="far fa-user-alt me-2" />
                {course.students} học viên
              </span>
              <span className="lessons">
                <i className="far fa-play-circle me-2" /> {course.lessons} bài
                học
              </span>
            </div>
          </div>
          <div className="course-hover-content">
            <h3 className="course-title mb-20 mt-30">{course?.tenKhoaHoc}</h3>
            <div className="course-meta d-flex align-items-center mb-20">
              <div className="author me-4">
                <img src={nguoiTao.hinhAnh} alt="" className="img-fluid" />
                <a href="">{nguoiTao?.hoTen}</a>
              </div>
              <span className="lesson ml-2">
                {' '}
                <i className="far fa-file-alt" /> {course.lessons} bài học
              </span>
            </div>
            <p className="mb-20">{desConvert}</p>
            <Button
              title="Ghi danh ngay"
              icon={<i className="fa fa-angle-right"></i>}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderPages = () => {
    return courses.map((course, index) => renderCourse(course, index));
  };

  return (
    <div className="row·justify-content-lg-center">
      <div className="row">{renderPages()}</div>
    </div>
  );
}

export default React.memo(CoursesList);
