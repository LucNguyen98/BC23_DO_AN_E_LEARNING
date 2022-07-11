import { Button, Card, CardBody, CardTitle, Table } from 'reactstrap';
import React from 'react';

const RegisterTables = ({ data = [], cancelRegister, title = '' }) => {
  return (
    <Card>
      <CardTitle tag="h6" className="border-bottom p-3 mb-0">
        {title}
      </CardTitle>
      <CardBody className="">
        {data?.length > 0 && (
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Bí danh</th>
                <th>Họ tên</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.taiKhoan}</td>
                  <td>{tdata.biDanh}</td>
                  <td>{tdata.hoTen}</td>
                  <td>
                    <td>
                      <Button
                        title="Huỷ ghi danh"
                        size="sm"
                        color="danger"
                        onClick={() => {
                          cancelRegister(tdata);
                        }}
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {data?.length <= 0 && (
          <div>
            <span>Không có kết quả nào!</span>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default React.memo(RegisterTables);
