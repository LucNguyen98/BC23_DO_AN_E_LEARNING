import { Button, Card, CardBody, Table } from 'reactstrap';

import React from 'react';
import { Pagination } from '..';

const UserTables = ({
  data = [],
  isPagination = false,
  currentPage,
  onChangePage,
  totalPages,
  removeUser,
  updateUser,
}) => {
  return (
    <Card>
      <CardBody>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>Loại</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Sdt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((tdata, index) => (
              <tr key={index} className="border-top">
                <td>{tdata.tenLoaiNguoiDung}</td>
                <td>{tdata.taiKhoan}</td>
                <td>
                  <h6>{tdata.hoTen}</h6>
                </td>
                <td>
                  <span className="text-muted">{tdata.email}</span>
                </td>
                <td>{tdata.soDT}</td>
                <td>
                  <Button
                    size="sm"
                    className="mr-3"
                    color="primary"
                    onClick={() => updateUser(tdata)}
                  >
                    <i className="fa fa-pencil-alt"></i>
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => removeUser(tdata?.taiKhoan)}
                  >
                    <i className="fa fa-trash"></i>
                  </Button>
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
          />
        )}
      </CardBody>
    </Card>
  );
};

export default React.memo(UserTables);
