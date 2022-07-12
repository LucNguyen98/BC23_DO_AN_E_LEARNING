import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, ErrorMessage } from 'src/components';
import { USER_TYPE } from 'src/constants';
import { SUBMIT_ERROR, VALIDATION_MESSAGE } from 'src/constants/error';
import { ADMIN_PARENT } from 'src/constants/pathName';
import withLoader from 'src/HOC/withLoader';
import { loginAction } from 'src/redux/actions/authAction';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import './Login.scss';
function LoginAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = React.useRef({
    taiKhoan: '123',
    matKhau: '123123',
  });

  const schema = yup.object().shape({
    taiKhoan: yup.string().required(VALIDATION_MESSAGE.required),
    matKhau: yup.string().required(VALIDATION_MESSAGE.required),
  });

  const { values, handleChange, handleSubmit, touched, errors, isValid } =
    useFormik({
      initialValues: users.current,
      validationSchema: schema,
      onSubmit: (vals, { resetForm }) => {
        // eslint-disable-next-line no-unused-vars
        dispatch(
          loginAction(vals, (result) => {
            if (result && result.maLoaiNguoiDung === USER_TYPE.GV) {
              resetForm();
              navigate(ADMIN_PARENT, { replace: true });
            } else {
              Swal.fire({
                ...SUBMIT_ERROR,
                text: 'Tài khoản này không có quyền truy cập! ',
              });
            }
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
                <div className="login-form">
                  <div className="form-header">
                    <h2 className="font-weight-bold mb-3">Đăng nhập</h2>
                  </div>
                  <form
                    className="woocommerce-form woocommerce-form-login login"
                    onSubmit={handleSubmit}
                  >
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label htmlFor="taiKhoan">
                        Tài khoản&nbsp;
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        name="taiKhoan"
                        placeholder="Tài khoản"
                        value={values.taiKhoan}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        isError={errors.taiKhoan || touched.taiKhoan}
                        message={errors.taiKhoan}
                      />
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label htmlFor="password">
                        Mật khẩu&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        type="password"
                        name="matKhau"
                        placeholder="Mật khẩu"
                        value={values.matKhau}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        isError={errors.matKhau || touched.matKhau}
                        message={errors.matKhau}
                      />
                    </p>
                    <p className="form-row">
                      <Button
                        type="submit"
                        title="Đăng nhập"
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
      </div>
    </div>
  );
}

export default withLoader(LoginAdmin);
