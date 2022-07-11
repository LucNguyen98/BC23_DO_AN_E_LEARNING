import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const COUNT_LIMIT = 10;
const PAGE_LIMIT = 8;
const DEFAULT_FILTERS = {
  page: 1,
  pageSize: COUNT_LIMIT,
};
import { Col, Row } from 'reactstrap';
import CourseFilter from 'src/components/dashboard/CourseFilter';
import CourseTable from 'src/components/dashboard/CourseTable';
import {
  DELETE_COURSE_ERROR,
  WARNING_COURSE_REMOVE,
} from 'src/constants/error';
import { ADMIN_PARENT, COURSE_CREATE_EDIT_PATH } from 'src/constants/pathName';
import {
  deleteCourseAction,
  getCourseListAction,
  getCourseByCategoryAction,
} from 'src/redux/actions/courseAction';
import Swal from 'sweetalert2';

export default function CourseManager() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const { courseList, currentPage, totalCount } = useSelector(
    (state) => state.course
  );

  useEffect(() => {
    dispatch(getCourseListAction(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (filters.tenKhoaHoc) {
      dispatch(getCourseListAction(filters));
    }
    if (filters.maDanhMuc) {
      let maDanhMuc = filters.maDanhMuc.value;
      dispatch(getCourseByCategoryAction({ maDanhMuc, maNhom: 'GP01' }));
    }
    setFilters(DEFAULT_FILTERS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

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

  const removeCourse = (maKhoaHoc) => {
    Swal.fire(WARNING_COURSE_REMOVE).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourseAction(maKhoaHoc));
      }
    });
  };

  const createCourse = () => {
    const link = `${ADMIN_PARENT}/${COURSE_CREATE_EDIT_PATH}`;
    navigate(link, {
      state: {
        course: {
          maKhoaHoc: '',
          biDanh: '',
          tenKhoaHoc: '',
          moTa: '',
          luotXem: '',
          danhGia: '',
          maNhom: '',
        },
        isUpdate: false,
      },
    });
  };

  const onChangeKey = (tenKhoaHoc) => {
    if (tenKhoaHoc) {
      setFilters({ ...filters, tenKhoaHoc });
    } else {
      setFilters(DEFAULT_FILTERS);
    }
  };

  const onChangeSelect = (maDanhMuc) => {
    if (maDanhMuc) {
      setFilters({ ...filters, maDanhMuc });
    } else {
      setFilters(DEFAULT_FILTERS);
    }
  };

  return (
    <Row>
      <Col lg="12">
        <CourseFilter
          onChange={onChangeKey}
          createCourse={createCourse}
          onSelect={onChangeSelect}
        />
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
