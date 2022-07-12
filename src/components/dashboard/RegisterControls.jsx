import React, { useRef } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

function RegisterControls({ onChange, createUser }) {
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
                <Label for="exampleSearch">Nhập mã khoá học</Label>
                <Input
                  name="search"
                  placeholder="Nhập mã khoá học"
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
        </Row>
      </CardBody>
    </Card>
  );
}

export default React.memo(RegisterControls);
