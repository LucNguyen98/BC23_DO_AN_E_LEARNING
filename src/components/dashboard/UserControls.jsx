import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

import { getUserPaginationAction } from 'src/redux/actions/userAction';
const COUNT_LIMIT = 10;

export default function UserControls() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUserPaginationAction({
        page: 1,
        pageSize: COUNT_LIMIT,
      })
    );
  }, [dispatch]);

  return (
    <Card>
      <CardBody>
        <Row>
          <Col lg="6">
            <Form>
              <FormGroup>
                <Label for="exampleSearch">Tìm kiếm</Label>
                <Input
                  id="exampleSearch"
                  name="search"
                  placeholder="Nhập từ khoá"
                  type="search"
                  bsSize="sm"
                />
              </FormGroup>
            </Form>
          </Col>
          <Col lg="6">
            {/* <Form>
    <FormGroup>
      <Label for="exampleSearch">Search</Label>
      <Input
        id="exampleSearch"
        name="search"
        placeholder="search placeholder"
        type="search"
      />
    </FormGroup>
  </Form> */}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
