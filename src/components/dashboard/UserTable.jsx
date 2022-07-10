import { Card, CardBody, Table } from 'reactstrap';

import React from 'react';
import { ButtonDropDown, Pagination } from '..';
import { useMemo } from 'react';

const UserTables = ({
  data = [],
  isPagination = false,
  currentPage,
  onChangePage,
  totalPages,
  removeUser,
  updateUser,
}) => {
  const menus = useMemo(
    () => [
      {
        name: 'Chỉnh sửa',
        icon: <i className="fa fa-pencil-alt"></i>,
      },
      {
        name: 'Xoá',
        icon: <i className="fa fa-trash"></i>,
      },
    ],
    []
  );

  const onAction = (item, user) => {
    if (item.name === 'Chỉnh sửa') {
      updateUser(user);
    } else {
      removeUser(user?.taiKhoan);
    }
  };

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
              <th></th>
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
                  <ButtonDropDown
                    menus={menus}
                    item={tdata}
                    onSelected={onAction}
                  />
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
