import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { getCategoriesAction } from 'src/redux/actions/courseAction';
import { ButtonDropDown } from '..';
const COUNT_LIMIT = 10;

export default function CourseFilter() {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.course.categories);
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  const menuItems = categoryList.map((category) => {
    return {
      name: category.tenDanhMuc,
    };
  });

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
            <ButtonDropDown title="Chon Loc" menus={menuItems} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
