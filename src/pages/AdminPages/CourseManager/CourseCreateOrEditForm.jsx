import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { VALIDATION_MESSAGE } from 'src/constants/error';
import { regexPhoneNumber } from 'src/helpers/validation';
import { useDispatch } from 'react-redux';
import { ErrorMessage } from 'src/components';
import withLoader from 'src/HOC/withLoader';
import {
  addCourseAction,
  updateCourseAction,
} from 'src/redux/actions/courseAction';

const CourseCreateOrEditForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    state: { course, isUpdate },
  } = location || {};
  const title = useMemo(() => {
    return isUpdate ? 'Chỉnh sửa thông tin khóa học' : 'Tạo mới khóa học';
  }, [isUpdate]);
  const btnTitle = useMemo(() => {
    return isUpdate ? 'Lưu' : 'Tạo mới';
  }, [isUpdate]);

  const schema = yup.object().shape({
    taiKhoan: yup.string().required(VALIDATION_MESSAGE.required),
    hoTen: yup.string().required(VALIDATION_MESSAGE.required),
    email: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .email(VALIDATION_MESSAGE.email),
    soDT: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .matches(regexPhoneNumber, VALIDATION_MESSAGE.phone),
    matKhau: isUpdate
      ? yup
          .string()
          .required(VALIDATION_MESSAGE.required)
          .min(8, VALIDATION_MESSAGE.password)
      : yup.string().notRequired(),
  });
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: course,
    validationSchema: schema,
    onSubmit: (vals) => {
      isUpdate
        ? dispatch(updateCourseAction(vals, () => {}))
        : dispatch(addCourseAction(vals, () => navigate(-1)));
    },
  });

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h3" className="border-bottom p-3 mb-0">
            {title}
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="maKhoaHoc">Mã Khóa Học</Label>
                <Input
                  name="maKhoaHoc"
                  type="text"
                  value={values.maKhoaHoc}
                  onChange={handleChange}
                  disabled={isUpdate}
                />
              </FormGroup>

              <FormGroup>
                <Label for="biDanh">Bí Danh</Label>
                <Input
                  name="biDanh"
                  type="text"
                  value={values.biDanh}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="tenKhoaHoc">Tên Khóa Học</Label>
                <Input
                  name="tenKhoaHoc"
                  type="text"
                  value={values.tenKhoaHoc}
                  onChange={handleChange}
                  disabled={isUpdate}
                />
              </FormGroup>

              <FormGroup>
                <Label for="moTa">Mô tả</Label>
                <Input
                  name="moTa"
                  type="text"
                  value={values.moTa}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="moTa">Lượt xem</Label>
                <Input
                  name="luotXem"
                  type="text"
                  value={values.luotXem}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="moTa">Đánh giá</Label>
                <Input
                  name="danhGia"
                  type="text"
                  value={values.danhGia}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="moTa">Mã Nhóm</Label>
                <Input
                  name="maNhom"
                  type="text"
                  value={values.maNhom}
                  onChange={handleChange}
                />
              </FormGroup>

              <Button color="success" outline type="submit" className="px-5">
                {btnTitle}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CourseCreateOrEditForm;
