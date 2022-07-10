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
import { regexPhoneNumber } from 'src/helpers/validation';
import { useDispatch } from 'react-redux';
import { updateUserAction } from 'src/redux/actions/authAction';
import { ErrorMessage } from 'src/components';
import withLoader from 'src/HOC/withLoader';
import { addUserAction } from 'src/redux/actions/userAction';

const options = [
  {
    label: 'Học viên',
    value: 'HV',
  },
  {
    label: 'Giáo vụ',
    value: 'GV',
  },
];

const UserCreateOrEditForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    state: { user, isUpdate },
  } = location || {};
  const title = useMemo(() => {
    return isUpdate ? 'Chỉnh sửa thông tin người dùng' : 'Tạo mới người dùng';
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
    initialValues: user,
    validationSchema: schema,
    onSubmit: (vals) => {
      isUpdate
        ? dispatch(updateUserAction(vals, () => {}))
        : dispatch(addUserAction(vals, () => navigate(-1)));
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
                <Label for="exampleEmail">Tài khoản</Label>
                <Input
                  name="taiKhoan"
                  type="text"
                  value={values.taiKhoan}
                  onChange={handleChange}
                  disabled={isUpdate}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Họ tên</Label>
                <Input
                  name="hoTen"
                  type="text"
                  value={values.hoTen}
                  onChange={handleChange}
                />
                <ErrorMessage
                  isError={errors.hoTen || touched?.hoTen}
                  message={errors.hoTen}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  disabled={isUpdate}
                />
                <ErrorMessage
                  isError={errors.hoTen || touched?.hoTen}
                  message={errors.hoTen}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Số điện thoại</Label>
                <Input
                  name="soDT"
                  type="text"
                  value={values.soDT}
                  onChange={handleChange}
                />
                <ErrorMessage
                  isError={errors.soDT || touched?.soDT}
                  message={errors.soDT}
                />
              </FormGroup>

              {!isUpdate && (
                <FormGroup>
                  <Label for="exampleEmail">Mật khẩu</Label>
                  <Input
                    name="matKhau"
                    type="password"
                    value={values.matKhau}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    isError={errors.matKhau || touched?.matKhau}
                    message={errors.matKhau}
                  />
                </FormGroup>
              )}

              <FormGroup>
                <Label for="maLoaiNguoiDung">Loại người dùng</Label>
                <Input
                  name="maLoaiNguoiDung"
                  type="select"
                  value={values.maLoaiNguoiDung}
                  onChange={handleChange}
                >
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Input>
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

export default React.memo(withLoader(UserCreateOrEditForm));
