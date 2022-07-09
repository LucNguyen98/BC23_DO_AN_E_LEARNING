import React, { useRef } from 'react';

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

function UserControls({ onChange }) {
  const key = useRef('');
  const onSearch = (e) => {
    e.preventDefault();
    const value = key.current;
    onChange(value);
  };

  return (
    <Card>
      <CardBody>
        <Row>
          <Col lg="6">
            <Form onSubmit={onSearch}>
              <FormGroup>
                <Label for="exampleSearch">Tìm kiếm</Label>
                <Input
                  name="search"
                  placeholder="Tìm kiếm theo tài khoản"
                  type="search"
                  bsSize="sm"
                  onChange={(e) => {
                    const { value } = e.target;
                    key.current = value;
                  }}
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

export default React.memo(UserControls);
