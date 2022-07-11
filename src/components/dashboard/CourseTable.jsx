import { Button, Card, CardBody, Table } from 'reactstrap';

import React from 'react';
import { Pagination } from '..';

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
                    <Button
                      size="sm"
                      className="mr-3"
                      color="primary"
                      onClick={() => updateCourse(tdata)}
                    >
                      <i className="fa fa-pencil-alt"></i>
                    </Button>
                    <Button
                      size="sm"
                      color="danger"
                      onClick={() => removeCourse(tdata?.maKhoaHoc)}
                    >
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
