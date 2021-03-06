import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { VALIDATION_MESSAGE } from 'src/constants/error';
import { regexPhoneNumber } from 'src/helpers/validation';
import { useDispatch } from 'react-redux';
import { Button, ErrorMessage } from 'src/components';
import withLoader from 'src/HOC/withLoader';
import { courseRegisterAction } from 'src/redux/actions/courseAction';
import { getUser } from 'src/helpers/localStorage';
import { useNavigate, useParams } from 'react-router-dom';

function CourseRegister() {
  const dispatch = useDispatch();
  const { maKhoaHoc } = useParams();
  const user = getUser();
  const navigate = useNavigate();
  const registerInfo = React.useRef({
    hoTen: '',
    taiKhoan: user.taiKhoan,
    email: '',
    soDT: '',
    maKhoaHoc,
  });

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
      initialValues: registerInfo.current,
      validationSchema: schema,
      onSubmit: (vals, { resetForm }) => {
        // eslint-disable-next-line no-unused-vars
        const { taiKhoan, maKhoaHoc } = vals;
        dispatch(
          courseRegisterAction({ taiKhoan, maKhoaHoc }, () => {
            resetForm();
            navigate('/');
          })
        );
      },
    });

  return (
    <div>
      <div id="top-header">
        <section className="page-wrapper woocommerce single">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-xl-5">
                <div className="woocommerce-notices-wrapper" />
                <div className="register-form">
                  <div className="form-header">
                    <h2 className="font-weight-bold mb-3">
                      H???C PH?? & GHI DANH
                    </h2>
                  </div>
                  <form
                    className="woocommerce-form woocommerce-form-login login"
                    onSubmit={handleSubmit}
                  >
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label htmlFor="hoTen">
                        H??? v?? t??n&nbsp;
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        name="hoTen"
                        placeholder="H??? v?? t??n"
                        value={values.hoTen}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        isError={errors.hoTen || touched.hoTen}
                        message={errors.hoTen}
                      />
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label htmlFor="email">
                        Email li??n h???&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email li??n h???"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        isError={errors.email || touched.email}
                        message={errors.email}
                      />
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label htmlFor="soDT">
                        ??i???n tho???i li??n h???&nbsp;
                        <span className="required">*</span>
                      </label>
                      <input
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        type="text"
                        name="soDT"
                        placeholder="??i???n tho???i li??n h???"
                        value={values.soDT}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        isError={errors.soDT || touched.soDT}
                        message={errors.soDT}
                      />
                    </p>
                    <p className="form-row">
                      <Button
                        type="submit"
                        title="????ng k??"
                        customClass="woocommerce-button button woocommerce-form-login__submit"
                        disabled={!isValid}
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default withLoader(CourseRegister);
