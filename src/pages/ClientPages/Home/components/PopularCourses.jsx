import React from 'react';
import CoursesList from 'src/components/courseList/coursesList';
import { createClass } from 'src/utils/utils';

function PopularCourses({ courses = [], customClass = [] }) {
  return (
    <section
      className={createClass([
        'course-wrapper',
        'section-padding',
        ...customClass,
      ])}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-heading mb-70 text-center">
              <h2 className="font-lg">Các khóa học phổ biến</h2>
              <p>
                Khám phá chương trình hoàn hảo của bạn trong các khóa học của
                chúng tôi.
              </p>
            </div>
          </div>
        </div>
        <CoursesList courses={courses} maKhoaHoc={'Home'} />
      </div>
    </section>
  );
}

export default React.memo(PopularCourses);
