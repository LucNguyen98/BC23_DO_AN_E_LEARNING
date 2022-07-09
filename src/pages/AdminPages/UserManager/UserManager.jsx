import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import UserTables from 'src/components/dashboard/UserTable';
import { WARNING_REMOVE } from 'src/constants/error';
import { ADMIN_PARENT, USER_CREATE_EDIT_PATH } from 'src/constants/pathName';
import {
  deleteUserAction,
  getUserPaginationAction,
} from 'src/redux/actions/userAction';
import Swal from 'sweetalert2';
import UserSearch from '../../../components/dashboard/UserControls';
const COUNT_LIMIT = 10;
const PAGE_LIMIT = 8;
const DEFAULT_FILTERS = {
  page: 1,
  pageSize: COUNT_LIMIT,
};
export default function UserManager() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, currentPage, totalCount } = useSelector((state) => state.user);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  useEffect(() => {
    dispatch(getUserPaginationAction(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / COUNT_LIMIT);
  }, [totalCount]);

  const onChangePage = (page) => {
    setFilters({ ...filters, page, pageSize: COUNT_LIMIT });
  };

  const onChangeKey = (tuKhoa) => {
    if (tuKhoa) {
      setFilters({ ...filters, tuKhoa });
    } else {
      setFilters(DEFAULT_FILTERS);
    }
  };

  const updateUser = (user) => {
    console.log(user);
    const link = `${ADMIN_PARENT}/${USER_CREATE_EDIT_PATH}`;
    navigate(link);
  };

  const removeUser = (taiKhoan) => {
    Swal.fire(WARNING_REMOVE).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUserAction(taiKhoan));
      }
    });
  };

  return (
    <Row>
      <Col lg="12">
        <UserSearch onChange={onChangeKey} />
        <UserTables
          data={users}
          isPagination
          currentPage={currentPage}
          totalPages={totalPages}
          page_limit={PAGE_LIMIT}
          onChangePage={onChangePage}
          removeUser={removeUser}
          updateUser={updateUser}
        />
      </Col>
    </Row>
  );
}
