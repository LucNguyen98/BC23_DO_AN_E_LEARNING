import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Pagination } from 'src/components';
import CoursesList from 'src/components/courseList/coursesList';
import { COURSE_DETAIL_PATH } from 'src/constants/pathName';
import {
  getCourseByCategoryAction,
  getCourseListAction,
} from 'src/redux/actions/courseAction';
import { coursesSelector } from 'src/redux/selectors/courseSelector';

const COUNT_LIMIT = 8;

export default function Courses() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { maDanhMucKhoahoc: maDanhMuc = '' } = useParams();
  const { currentPage, totalCount } = useSelector((state) => state.course);
  const courses = useSelector(coursesSelector);

  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / COUNT_LIMIT);
  }, [totalCount]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (maDanhMuc) {
      dispatch(getCourseByCategoryAction({ maDanhMuc }));
    } else {
      dispatch(
        getCourseListAction({ page: currentPage, pageSize: COUNT_LIMIT })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maDanhMuc]);

  const onChangePage = (page) => {
    dispatch(getCourseListAction({ page, pageSize: COUNT_LIMIT }));
  };

  const goToCourseDetail = (item) => {
    const link = `${COURSE_DETAIL_PATH}/${item?.maKhoaHoc}`;
    navigate(link);
  };

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
