import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { getCategoriesAction } from 'src/redux/actions/courseAction';
import { ButtonDropDown } from '..';

export default function CourseFilter({ onChange, createCourse, onSelect }) {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.course.categories);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  const menuItems = categoryList.map((category) => {
    return {
      value: category.maDanhMuc,
      name: category.tenDanhMuc,
    };
  });

  const key = useRef('');
  const onSearch = (e) => {
    e.preventDefault();
    const value = key.current;
    onChange(value);
  };

  const onSelected = (maDanhMuc) => {
    onSelect(maDanhMuc);
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
                  placeholder="Tìm kiếm theo tên khóa học"
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
          <Col lg="6" className="d-flex justify-content-end align-items-center">
            <ButtonDropDown
              title="Danh mục"
              menus={menuItems}
              onSelected={onSelected}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <Button color="success" onClick={createCourse}>
              <i className="fa fa-plus"></i> Tạo mới
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
