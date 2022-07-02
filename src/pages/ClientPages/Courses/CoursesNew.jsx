import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CoursesList from 'src/components/courseList/coursesList';
import {
  getCourseByCategoryAction,
  getCourseListAction,
} from 'src/redux/actions/courseAction';
import { coursesSelector } from 'src/redux/selectors/courseSelector';

export default function Courses() {
  const dispatch = useDispatch();
  const { maDanhMucKhoahoc: maDanhMuc = '' } = useParams();

  const courses = useSelector(coursesSelector);
  const courseAllList = useSelector((state) => state.course.courseList);
  const [filters, setfilters] = useState({});

  const data = useMemo(() => {
    return maDanhMuc ? courses : courseAllList;
  }, [courseAllList, courses, maDanhMuc]);

  useEffect(() => {
    setfilters({ ...filters, maDanhMuc });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maDanhMuc]);

  useEffect(() => {
    if (filters.maDanhMuc) {
      dispatch(getCourseByCategoryAction(filters));
    } else {
      dispatch(getCourseListAction());
    }
  }, [dispatch, filters]);

  return (
    <section className="section-padding page">
      <div className="course-top-wrap">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-lg-8">
              <p>Showing 1-6 of 8 results</p>
            </div> */}
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
        <CoursesList courses={data} />
      </div>
    </section>
  );
}
