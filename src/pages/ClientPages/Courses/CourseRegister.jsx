import React from 'react'

export default function CourseRegister() {
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
                    <h2 className="font-weight-bold mb-3">Register</h2>
                  </div>
                  <form
                    className="woocommerce-form woocommerce-form-login login"
                    method="post">
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label htmlFor="username">
                        Username or email address&nbsp;
                        <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        name="username"
                        id="username"
                        autoComplete="username"
                        defaultValue
                        placeholder="Username or Email"
                      />
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label htmlFor="email">
                        Email&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        className="woocommerce-Input woocommerce-Input--text input-text form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </p>
                    <p className="form-row">
                      <input
                        type="hidden"
                        id="woocommerce-login-nonce"
                        name="woocommerce-login-nonce"
                        defaultValue="a414dce984"
                      />
                      <input
                        type="hidden"
                        name="_wp_http_referer"
                        defaultValue="/my-account/"
                      />
                      <button
                        type="submit"
                        className="woocommerce-button button woocommerce-form-login__submit"
                        name="register"
                        value="Register"
                      >
                        Register
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
