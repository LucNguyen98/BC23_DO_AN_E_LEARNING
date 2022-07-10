import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const COUNT_LIMIT = 10;
const PAGE_LIMIT = 8;
import { Col, Row } from 'reactstrap';
import CourseFilter from 'src/components/dashboard/CourseFilter';
import CourseTable from 'src/components/dashboard/CourseTable';
import { getCourseListAction } from 'src/redux/actions/courseAction';

export default function CourseManager() {
  const dispatch = useDispatch();
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
        />
      </Col>
    </Row>
  );
}
