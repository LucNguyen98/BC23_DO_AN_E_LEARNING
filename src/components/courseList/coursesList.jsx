import React from 'react';
import { useSelector } from 'react-redux';
import { courseGroupByCategorySelector } from 'src/redux/selectors/courseSelector';

function CoursesList(props) {
  const courseList = useSelector(courseGroupByCategorySelector);
  const courses = () => {
    let maKhoaHoc = props.maKhoaHoc;
    if (maKhoaHoc === 'Home') {
      maKhoaHoc = 'FrontEnd';
    }
    const backendCourse = courseList.filter(
      (course) => course.danhMucKhoaHoc.maDanhMucKhoahoc === maKhoaHoc
    );
    return backendCourse[0];
  };

  const renderCourse = (course, index) => {
    return (
      <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
        <div className="course-grid bg-shadow tooltip-style">
          <div className="course-header">
            <div className="course-thumb">
              <img
                src="/images/course/img_06.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="course-price">$300</div>
            </div>
          </div>
          <div className="course-content">
            <div className="rating mb-10">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <span>3.9 (30 reviews)</span>
            </div>
            <h3 className="course-title mb-20">
              {' '}
              <a href="">{course?.tenKhoaHoc}</a>{' '}
            </h3>
            <div className="course-footer mt-20 d-flex align-items-center justify-content-between ">
              <span className="duration">
                <i className="far fa-clock me-2" />
                6.5 hr
              </span>
              <span className="students">
                <i className="far fa-user-alt me-2" />
                51 Students
              </span>
              <span className="lessons">
                <i className="far fa-play-circle me-2" />
                26 Lessons
              </span>
            </div>
          </div>
          <div className="course-hover-content">
            <div className="price">$300</div>
            <h3 className="course-title mb-20 mt-30">{course?.tenKhoaHoc}</h3>
            <div className="course-meta d-flex align-items-center mb-20">
              <div className="author me-4">
                <img
                  src="/images/course/course-2.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="">Josephin</a>
              </div>
              <span className="lesson">
                {' '}
                <i className="far fa-file-alt" /> 20 lessons
              </span>
            </div>
            <p className="mb-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              culpa. At voluptatem autem ipsam deleniti
            </p>
            <a href="" className="btn btn-grey btn-sm rounded">
              Join Now <i className="fal fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const renderPages = () => {
    let list = courses()?.danhSachKhoaHoc;
    if (props.maKhoaHoc === 'Home') {
      list = courses()?.danhSachKhoaHoc.slice(1, 4);
    }
    if (typeof list !== 'undefined') {
      return list.map((course, index) => renderCourse(course, index));
    }
  };

  return (
    <div className="row·justify-content-lg-center">
      <div className="row">{renderPages()}</div>
    </div>
  );
}

export default React.memo(CoursesList);
