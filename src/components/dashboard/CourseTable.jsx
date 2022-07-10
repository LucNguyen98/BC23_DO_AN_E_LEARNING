import { Button, Card, CardBody, Table } from 'reactstrap';

import React from 'react';
import { ButtonDropDown, Pagination } from '..';

const CourseTable = ({
  data = [],
  isPagination = false,
  currentPage,
  onChangePage,
  totalPages,
  page_limit,
}) => {
  return (
    <Card>
      <CardBody>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>Ma Khoa Hoc</th>
              <th>Ten Khoa Hoc</th>
              <th>Hinh Anh</th>
              <th>Ngay Tao</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((tdata, index) => (
              <tr key={index} className="border-top">
                <td>{tdata.maKhoaHoc}</td>
                <td>{tdata.tenKhoaHoc}</td>
                <td>
                  <img src={tdata.hinhAnh} alt="..." width={40} height={40} />
                </td>
                <td>{tdata.ngayTao}</td>
                <td>
                  <td>
                    <Button size="sm" className="mr-3" color="primary">
                      <i className="fa fa-pencil-alt"></i>
                    </Button>
                    <Button size="sm" color="danger">
                      <i className="fa fa-trash"></i>
                    </Button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {isPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={onChangePage}
            page_limit={page_limit}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default React.memo(CourseTable);
