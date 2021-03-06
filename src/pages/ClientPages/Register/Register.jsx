import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Loading } from 'src/components';
import ErrorMessage from 'src/components/_common/errorMessage/errorMessage';
import { VALIDATION_MESSAGE } from 'src/constants/error';
import { LOGIN_PATH } from 'src/constants/pathName';
import { regexPhoneNumber } from 'src/helpers/validation';
import withLoader from 'src/HOC/withLoader';
import { registerAction } from 'src/redux/actions/authAction';
import * as yup from 'yup';
import './Register.scss';
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = React.useRef({
    hoTen: '',
    taiKhoan: '',
    email: '',
    soDT: '',
    matKhau: '',
    reMatKhau: '',
    maNhom: 'GP01',
  });

  const schema = yup.object().shape({
    hoTen: yup.string().required(VALIDATION_MESSAGE.required),
    taiKhoan: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .min(8, VALIDATION_MESSAGE.leastCharacter),
    email: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .email(VALIDATION_MESSAGE.email),
    soDT: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .matches(regexPhoneNumber, VALIDATION_MESSAGE.phone),
    matKhau: yup
      .string()
      .required(VALIDATION_MESSAGE.required)
      .min(8, VALIDATION_MESSAGE.password),
    reMatKhau: yup
      .string()
      .oneOf([yup.ref('matKhau')], VALIDATION_MESSAGE.rePassword),
  });

  const { values, handleChange, handleSubmit, touched, errors, isValid } =
    useFormik({
      initialValues: users.current,
      validationSchema: schema,
      onSubmit: (vals, { resetForm }) => {
        // eslint-disable-next-line no-unused-vars
        const { reMatKhau, ...newValues } = vals;
        dispatch(
          registerAction(newValues, () => {
            resetForm();
            navigate(LOGIN_PATH);
          })
        );
      },
    });

  return (
    <div id="top-header">
      <section className="woocommerce single page-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-xl-7">
              <div className="signup-form">
                <div className="form-header">
                  <h2 className="font-weight-bold mb-3">????ng k??</h2>
                  <p className="woocommerce-register">
                    B???n ???? c?? t??i kho???n?{' '}
                    <NavLink
                      to={LOGIN_PATH}
                      className="text-decoration-underline"
                    >
                      ????ng nh???p
                    </NavLink>
                  </p>
                </div>
                <form
                  className="woocommerce-form woocommerce-form-register register"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-12">
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="hoTen">
                          H??? v?? t??n&nbsp;<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="hoTen"
                          placeholder=" H??? v?? t??n"
                          value={values.hoTen}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          isError={errors.hoTen && touched.hoTen}
                          message={errors.hoTen}
                        />
                      </p>
                    </div>
                    <div className="col-12">
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="taiKhoan">
                          T??i kho???n&nbsp;<span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="taiKhoan"
                          placeholder="T??i kho???n"
                          value={values.taiKhoan}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          isError={errors.taiKhoan && touched.taiKhoan}
                          message={errors.taiKhoan}
                        />
                      </p>
                    </div>
                    <div className="col-12">
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="email">
                          Email&nbsp;<span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          isError={errors.email && touched.email}
                          message={errors.email}
                        />
                      </p>
                    </div>
                    <div className="col-12">
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="soDT">
                          S??? ??i???n tho???i&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="soDT"
                          placeholder="S??? ??i???n tho???i"
                          value={values.soDT}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          isError={errors.soDT && touched.soDT}
                          message={errors.soDT}
                        />
                      </p>
                    </div>
                    <div className="col-12">
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="matKhau">
                          M???t kh???u&nbsp;<span className="required">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="matKhau"
                          placeholder="M???t kh???u"
                          value={values.matKhau}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          isError={errors.matKhau && touched.matKhau}
                          message={errors.matKhau}
                        />
                      </p>
                    </div>
                    <div className="col-12">
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reMatKhau">
                          Nh???p l???i m???t kh???u&nbsp;
                          <span className="required">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="reMatKhau"
                          placeholder="Nh???p l???i m???t kh???u"
                          value={values.reMatKhau}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          isError={errors.reMatKhau && touched.reMatKhau}
                          message={errors.reMatKhau}
                        />
                      </p>
                    </div>
                    <div className="col-xl-12">
                      <div className="d-flex align-items-center justify-content-between py-2">
                        <p className="form-row">
                          <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__policy">
                            <input
                              className="woocommerce-form__input woocommerce-form__input-checkbox"
                              name="policy"
                              type="checkbox"
                              id="policy"
                              defaultValue="forever"
                            />
                            <span>
                              Ch???p nh???n ??i???u kho???n v?? Ch??nh s??ch B???o m???t
                            </span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="woocommerce-FormRow form-row">
                    <Button
                      type="submit"
                      title="????ng k??"
                      customClass={'button'}
                      disabled={!isValid}
                    />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Loading />
    </div>
  );
}
export default withLoader(Register);
