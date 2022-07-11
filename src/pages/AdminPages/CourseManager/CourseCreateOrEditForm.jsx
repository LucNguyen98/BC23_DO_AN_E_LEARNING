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
} from 'reactstrap';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { VALIDATION_MESSAGE } from 'src/constants/error';
import { regexNumber, regexPhoneNumber } from 'src/helpers/validation';
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
import moment from 'moment';

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

  const schema = yup.object().shape({
    maKhoaHoc: yup.string().required(VALIDATION_MESSAGE.required),
    biDanh: yup.string().required(VALIDATION_MESSAGE.required),
    tenKhoaHoc: yup.string().required(VALIDATION_MESSAGE.required),
    moTa: yup.string().required(VALIDATION_MESSAGE.required),
    hinhAnh: yup.string().required(VALIDATION_MESSAGE.required),
    maDanhMucKhoaHoc: yup.string().required(VALIDATION_MESSAGE.required),
    luotXem: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .matches(regexNumber, 'Vui lòng nhập số'),
    danhGia: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .matches(regexNumber, 'Vui lòng nhập số'),
  });

  const { values, handleChange, handleSubmit, touched, errors, setFieldValue } =
    useFormik({
      enableReinitialize: true,
      initialValues: course,
      validationSchema: schema,
      onSubmit: (vals) => {
        isUpdate
          ? dispatch(
              updateCourseAction(
                {
                  ...vals,
                  maNhom: 'GP01',
                  ngayTao: moment().format('DD/MM/YYYY'),
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
                  ngayTao: moment().format('DD/MM/YYYY'),
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
                <ErrorMessage
                  isError={errors.maKhoaHoc || touched?.maKhoaHoc}
                  message={errors.maKhoaHoc}
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
                <ErrorMessage
                  isError={errors.biDanh || touched?.biDanh}
                  message={errors.biDanh}
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
                <ErrorMessage
                  isError={errors.tenKhoaHoc || touched?.tenKhoaHoc}
                  message={errors.tenKhoaHoc}
                />
              </FormGroup>

              <FormGroup>
                <Label for="moTa">Mô tả</Label>
                <Input
                  name="moTa"
                  type="textarea"
                  value={values.moTa}
                  onChange={handleChange}
                />
                <ErrorMessage
                  isError={errors.moTa || touched?.moTa}
                  message={errors.moTa}
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
                <ErrorMessage
                  isError={errors.luotXem || touched?.luotXem}
                  message={errors.luotXem}
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
                <ErrorMessage
                  isError={errors.danhGia || touched?.danhGia}
                  message={errors.danhGia}
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
                <ErrorMessage
                  isError={errors.hoTen || touched?.hoTen}
                  message={errors.hoTen}
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
                  <option value={''}>{'Chọn danh mục'}</option>
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Input>
                <ErrorMessage
                  isError={errors.maDanhMucKhoaHoc || touched?.maDanhMucKhoaHoc}
                  message={errors.maDanhMucKhoaHoc}
                />
              </FormGroup>

              <FormGroup>
                <Label for="hinhAnh">Hình Ảnh</Label>
                <Input
                  name="hinhAnh"
                  type="file"
                  onChange={handleChange}
                  accept="image/*"
                />
                <ErrorMessage
                  isError={errors.hinhAnh || touched?.hinhAnh}
                  message={errors.hinhAnh}
                />
              </FormGroup>

              <Button color="success" outline className="px-5" type="submit">
                {btnTitle}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(withLoader(CourseCreateOrEditForm));
