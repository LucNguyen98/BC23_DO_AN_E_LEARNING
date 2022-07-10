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
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { VALIDATION_MESSAGE } from 'src/constants/error';
import { regexPhoneNumber } from 'src/helpers/validation';
import { useDispatch } from 'react-redux';
import {
  getProfileAction,
  updateUserAction,
} from 'src/redux/actions/authAction';
import { ErrorMessage } from 'src/components';
import withLoader from 'src/HOC/withLoader';
import { getUser } from 'src/helpers/localStorage';

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
  const user = getUser();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const schema = yup.object().shape({
    hoTen: yup.string().required(VALIDATION_MESSAGE.required),
    soDT: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .matches(regexPhoneNumber, VALIDATION_MESSAGE.phone),
  });
  const {
    values,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isValid,
    setFieldValue,
  } = useFormik({
    enableReinitialize: true,
    initialValues: user,
    validationSchema: schema,
    onSubmit: (vals) => {
      dispatch(updateUserAction(vals));
    },
  });

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h3" className="border-bottom p-3 mb-0">
            Thông tin tài khoản
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="taiKhoan">Tài khoản</Label>
                <Input
                  name="taiKhoan"
                  type="text"
                  value={values.taiKhoan}
                  onChange={handleChange}
                  disabled={true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="hoTen">Họ tên</Label>
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
                <Label for="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  disabled={true}
                />
                <ErrorMessage
                  isError={errors.hoTen || touched?.hoTen}
                  message={errors.hoTen}
                />
              </FormGroup>
              <FormGroup>
                <Label for="soDT">Số điện thoại</Label>
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

              <FormGroup>
                <Label for="maLoaiNguoiDung">Loại người dùng</Label>
                <Input
                  name="maLoaiNguoiDung"
                  type="select"
                  value={values.maLoaiNguoiDung}
                  onChange={(e) => {
                    const { value } = e.target;
                    setFieldValue('maLoaiNguoiDung', value);
                  }}
                >
                  {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <Button color="success" outline className="px-5" type="submit">
                Lưu
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(withLoader(UserCreateOrEditForm));
