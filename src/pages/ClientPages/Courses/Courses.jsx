import React from 'react';
import { useParams } from 'react-router-dom';
import CoursesList from 'src/components/courseList/coursesList';

export default function Courses() {
  const { maDanhMucKhoahoc = '' } = useParams();
  console.log(maDanhMucKhoahoc);

  return (
    <section className="section-padding page">
      <div className="course-top-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p>Showing 1-6 of 8 results</p>
            </div>
            <div className="col-lg-4">
              <div className="topbar-search">
                <form method="get" action="#">
                  <input
                    type="text"
                    placeholder="Search our courses"
                    className="form-control"
                    id="searchCourses"
                  />
                  <label htmlFor="searchCourses">
                    <i className="fa fa-search" />
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CoursesList />
      </div>
    </section>
  );
}
