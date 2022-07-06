import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { VALIDATION_MESSAGE } from 'src/constants/error';
import { regexPhoneNumber } from 'src/helpers/validation';
import { useDispatch } from 'react-redux';
import { updateUserAction } from 'src/redux/actions/authAction';
import { Button, ErrorMessage } from 'src/components';

function Profile({ user }) {
  const dispatch = useDispatch();
  const [isUpdate, setUpdate] = useState(false);
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
    <div className="p-3 py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="text-right">Thông tin tài khoản</h4>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
          </p>
        </div>
        <div className="col-md-12">
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
          </p>
        </div>
        <div className="col-md-12">
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
          </p>
        </div>

        <div className="col-md-12">
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
          </p>
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
  );
}

export default React.memo(Profile);
