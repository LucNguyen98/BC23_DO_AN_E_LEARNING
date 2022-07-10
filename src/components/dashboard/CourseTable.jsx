import { Card, CardBody, Table } from 'reactstrap';

import React, { useMemo } from 'react';
import { ButtonDropDown, Pagination } from '..';

const CourseTable = ({
  data = [],
  isPagination = false,
  currentPage,
  onChangePage,
  totalPages,
  page_limit,
  updateCourse,
  removeCourse,
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
      updateCourse();
    } else {
      removeCourse(user?.taiKhoan);
    }
  };

  return (
    <Card>
      <CardBody>
        <Table className="no-wrap mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>Mã Khóa Học</th>
              <th>Tên Khóa Học</th>
              <th>Hình Ảnh</th>
              <th>Ngày Tạo</th>
              <th></th>
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
            page_limit={page_limit}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default React.memo(CourseTable);
