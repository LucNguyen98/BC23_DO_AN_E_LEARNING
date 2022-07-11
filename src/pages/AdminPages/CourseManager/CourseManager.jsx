import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const COUNT_LIMIT = 10;
const PAGE_LIMIT = 8;
import { Col, Row } from 'reactstrap';
import CourseFilter from 'src/components/dashboard/CourseFilter';
import CourseTable from 'src/components/dashboard/CourseTable';
import { WARNING_COURSE_REMOVE } from 'src/constants/error';
import { ADMIN_PARENT, COURSE_CREATE_EDIT_PATH } from 'src/constants/pathName';
import {
  deleteCourseAction,
  getCourseListAction,
} from 'src/redux/actions/courseAction';
import Swal from 'sweetalert2';

export default function CourseManager() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseList, currentPage, totalCount } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    dispatch(
      getCourseListAction({
        page: 1,
        pageSize: COUNT_LIMIT,
      })
    );
  }, [dispatch]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / COUNT_LIMIT);
  }, [totalCount]);

  const onChangePage = (page) => {
    dispatch(
      getCourseListAction({
        page,
        pageSize: COUNT_LIMIT,
      })
    );
  };

  const updateCourse = (course) => {
    const link = `${ADMIN_PARENT}/${COURSE_CREATE_EDIT_PATH}`;
    navigate(link, {
      state: { course, isUpdate: true },
    });
  };

  const removeCourse = (course) => {
    Swal.fire(WARNING_COURSE_REMOVE).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourseAction(course));
      }
    });
  };

  return (
    <Row>
      <Col lg="12">
        <CourseFilter />
        <CourseTable
          data={courseList}
          isPagination
          currentPage={currentPage}
          totalPages={totalPages}
          page_limit={PAGE_LIMIT}
          onChangePage={onChangePage}
          updateCourse={updateCourse}
          removeCourse={removeCourse}
        />
      </Col>
    </Row>
  );
}
