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
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage } from 'src/components';
import withLoader from 'src/HOC/withLoader';
import {
  addCourseAction,
  getCategoriesAction,
  updateCourseAction,
} from 'src/redux/actions/courseAction';
import { useEffect } from 'react';
import { USER } from 'src/constants';

const CourseCreateOrEditForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const courseList = useSelector((state) => state.course.categories);
  const {
    state: { course, isUpdate },
  } = location || {};
  const title = useMemo(() => {
    return isUpdate ? 'Chỉnh sửa thông tin khóa học' : 'Tạo mới khóa học';
  }, [isUpdate]);
  const btnTitle = useMemo(() => {
    return isUpdate ? 'Lưu' : 'Tạo mới';
  }, [isUpdate]);
  const taiKhoanNguoiTao = JSON.parse(localStorage.getItem(USER));
  const { values, handleChange, handleSubmit, touched, errors, setFieldValue } =
    useFormik({
      enableReinitialize: true,
      initialValues: course,
      onSubmit: (vals) => {
        console.log(vals);
        isUpdate
          ? dispatch(
              updateCourseAction(
                {
                  ...vals,
                  maNhom: 'GP01',
                  taiKhoanNguoiTao: taiKhoanNguoiTao.taiKhoan,
                },
                () => navigate(-1)
              )
            )
          : dispatch(
              addCourseAction(
                {
                  ...vals,
                  maNhom: 'GP01',
                  taiKhoanNguoiTao: taiKhoanNguoiTao.taiKhoan,
                },
                () => navigate(-1)
              )
            );
      },
    });

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  const options = courseList.map((course) => {
    return {
      label: course.tenDanhMuc,
      value: course.maDanhMuc,
    };
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
                  disabled={isUpdate}
                />
              </FormGroup>

              <FormGroup>
                <Label for="tenKhoaHoc">Tên Khóa Học</Label>
                <Input
                  name="tenKhoaHoc"
                  type="text"
                  value={values.tenKhoaHoc}
                  onChange={handleChange}
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
                <Label for="luotXem">Lượt xem</Label>
                <Input
                  name="luotXem"
                  type="text"
                  value={values.luotXem}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="danhGia">Đánh giá</Label>
                <Input
                  name="danhGia"
                  type="text"
                  value={values.danhGia}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="maNhom">Mã Nhóm</Label>
                <Input
                  name="maNhom"
                  type="text"
                  value={'GP01'}
                  onChange={handleChange}
                  disabled={true}
                />
              </FormGroup>

              <FormGroup>
                <Label for="ngayTao">Ngày Tạo</Label>
                <Input
                  name="ngayTao"
                  type="text"
                  value={values.ngayTao}
                  onChange={handleChange}
                  disabled={isUpdate}
                />
              </FormGroup>

              <FormGroup>
                <Label for="maDanhMucKhoaHoc">Mã Danh Mục Khóa Học</Label>
                <Input
                  name="maDanhMucKhoaHoc"
                  type="select"
                  value={values.maDanhMucKhoaHoc}
                  onChange={(e) => {
                    const { value } = e.target;
                    setFieldValue('maDanhMucKhoaHoc', value);
                  }}
                >
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="hinhAnh">Hình Ảnh</Label>
                <Input
                  name="hinhAnh"
                  type="file"
                  onChange={handleChange}
                  accept="image/*"
                />
              </FormGroup>

              <Button
                color="success"
                outline
                className="px-5"
                type="submit"
                // disabled={isValid}
              >
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
