import React, { useEffect, useState } from 'react';
import { Button, ErrorMessage } from 'src/components';
import { getUser } from 'src/helpers/localStorage';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { VALIDATION_MESSAGE } from 'src/constants/error';
import { regexPhoneNumber } from 'src/helpers/validation';
import { useDispatch } from 'react-redux';
import {
  getProfileAction,
  updateUserAction,
} from 'src/redux/actions/authAction';
import withLoader from 'src/HOC/withLoader';
function Account() {
  const dispatch = useDispatch();
  const user = getUser();
  const { hoTen, email } = user || {};
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  const schema = yup.object().shape({
    hoTen: yup.string().required(VALIDATION_MESSAGE.required),
    email: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .email(VALIDATION_MESSAGE.email),
    soDT: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .matches(regexPhoneNumber, VALIDATION_MESSAGE.phone),
  });
  const { values, handleChange, handleSubmit, touched, errors, isValid } =
    useFormik({
      enableReinitialize: true,
      initialValues: user,
      validationSchema: schema,
      onSubmit: (vals) => {
        // eslint-disable-next-line no-unused-vars
        dispatch(
          updateUserAction(vals, () => {
            setUpdate(false);
          })
        );
      },
    });
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              alt=""
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">{hoTen}</span>
            <span className="text-black-50">{email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-9">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Thông tin tài khoản</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label htmlFor="taiKhoan" className="labels">
                  Tài khoản
                </label>
                <input
                  name="taiKhoan"
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={values.taiKhoan}
                  disabled={true}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="email" className="labels">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  value={values.email}
                  disabled={true}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="hoTen" className="labels">
                  Họ tên
                </label>
                <input
                  name="hoTen"
                  type="text"
                  className="form-control"
                  value={values.hoTen}
                  disabled={!isUpdate}
                  onChange={handleChange}
                />
                <ErrorMessage
                  isError={errors.hoTen || touched?.hoTen}
                  message={errors.hoTen}
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="soDT" className="labels">
                  Số điện thoại
                </label>
                <input
                  name="soDT"
                  type="text"
                  className="form-control"
                  value={values.soDT}
                  disabled={!isUpdate}
                  onChange={handleChange}
                />
                <ErrorMessage
                  isError={errors.soDT || touched?.soDT}
                  message={errors.soDT}
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              {isUpdate && (
                <Button
                  btnType="grey"
                  customClass={'mr-4'}
                  title={'Huỷ bỏ'}
                  onClick={() => {
                    setUpdate(false);
                  }}
                />
              )}
              {isUpdate ? (
                <Button
                  title={'Lưu thay đổi'}
                  disabled={!isValid}
                  onClick={handleSubmit}
                />
              ) : (
                <Button
                  title={'Chỉnh sửa'}
                  onClick={() => {
                    setUpdate(!isUpdate);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLoader(Account);
