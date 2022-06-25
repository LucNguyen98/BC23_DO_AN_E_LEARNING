import React from 'react';
import CoursesList from 'src/components/courseList/coursesList';
import { createClass } from 'src/utils/utils';

export default function PopularCourses({ customClass = [] }) {
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
              <h2 className="font-lg">Popular Courses</h2>
              <p>Discover Your Perfect Program In Our Courses.</p>
            </div>
          </div>
        </div>
        <CoursesList />
      </div>
    </section>
  );
}
