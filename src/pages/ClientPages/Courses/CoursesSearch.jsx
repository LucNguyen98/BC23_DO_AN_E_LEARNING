import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { not_found } from 'src/assets/images/course';
import { Pagination } from 'src/components';
import CoursesList from 'src/components/courseList/coursesList';
import { COURSE_DETAIL_PATH } from 'src/constants/pathName';
import { getCourseListAction } from 'src/redux/actions/courseAction';
import { coursesSelector } from 'src/redux/selectors/courseSelector';

const COUNT_LIMIT = 8;

export default function CoursesSearch() {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.course.error);
  const { search } = useLocation();

  const tenKhoaHoc = useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get('tenKhoaHoc');
  }, [search]);

  const { currentPage, totalCount } = useSelector((state) => state.course);
  const courses = useSelector(coursesSelector);

  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / COUNT_LIMIT);
  }, [totalCount]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    dispatch(
      getCourseListAction({
        tenKhoaHoc,
        page: 1,
        pageSize: COUNT_LIMIT,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenKhoaHoc]);

  const onChangePage = (page) => {
    dispatch(getCourseListAction({ tenKhoaHoc, page, pageSize: COUNT_LIMIT }));
  };

  const goToCourseDetail = (item) => {
    const link = `${COURSE_DETAIL_PATH}/${item?.maKhoaHoc}`;
    history.push(link);
  };

  if (error?.message || error) {
    return (
      <div className="section-padding page text-center">
        <img
          alt=""
          src={not_found}
          className="img-fluid mb-2"
          width={100}
          height={100}
        />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="section-padding page">
      <div className="course-top-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <p>
                Hiển thị {currentPage}/{totalPages} có {courses?.length} kết quả
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CoursesList courses={courses} onClick={goToCourseDetail} />
        {totalCount > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={onChangePage}
          />
        )}
      </div>
    </section>
  );
}
