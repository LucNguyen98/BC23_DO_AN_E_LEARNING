import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import UserTables from 'src/components/dashboard/UserTable';
import { getUserPaginationAction } from 'src/redux/actions/userAction';
import UserSearch from '../../../components/dashboard/UserControls';
const COUNT_LIMIT = 10;
const PAGE_LIMIT = 8;
export default function UserManager() {
  const dispatch = useDispatch();
  const { users, currentPage, totalCount } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      getUserPaginationAction({
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
      getUserPaginationAction({
        page,
        pageSize: COUNT_LIMIT,
      })
    );
  };

  return (
    <Row>
      <Col lg="12">
        <UserSearch />
        <UserTables
          data={users}
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
