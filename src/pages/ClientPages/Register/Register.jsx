import React from 'react';
import { logo_white } from 'src/assets/images';

export default function Register() {
  return (
    <div>
      <div id="top-header">
        <section className="woocommerce single page-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-xl-7">
                <div className="signup-form">
                  <div className="form-header">
                    <h2 className="font-weight-bold mb-3">Sign Up</h2>
                    <p className="woocommerce-register">
                      Already have an account?{' '}
                      <a href="#" className="text-decoration-underline">
                        Log in
                      </a>
                    </p>
                  </div>
                  <form
                    method="post"
                    className="woocommerce-form woocommerce-form-register register"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="first-name">
                            First Name&nbsp;<span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="first-name"
                            placeholder="First Name"
                          />
                        </p>
                      </div>
                      <div className="col-xl-6">
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="last-name">
                            Last Name&nbsp;<span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="last-name"
                            placeholder="Last Name"
                          />
                        </p>
                      </div>
                      <div className="col-xl-6">
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="user-name">
                            User Name&nbsp;<span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="user-name"
                            defaultValue
                            placeholder="Username"
                          />
                        </p>
                      </div>
                      <div className="col-xl-6">
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="email">
                            Email&nbsp;<span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            defaultValue
                            placeholder="Your Email"
                          />
                        </p>
                      </div>
                      <div className="col-xl-6">
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="password">
                            Password&nbsp;<span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            defaultValue
                            placeholder="Password"
                          />
                        </p>
                      </div>
                      <div className="col-xl-6">
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="re-password">
                            Re-Enter Password&nbsp;
                            <span className="required">*</span>
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="re-password"
                            defaultValue
                            placeholder="Re-Enter Password"
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
                              <span>Accept the Terms and Privacy Policy</span>
                            </label>
                          </p>
                          <p className="woocommerce-LostPassword lost_password">
                            <a href="#">Forgot password?</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="woocommerce-FormRow form-row">
                      <button
                        type="submit"
                        className="woocommerce-button button"
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
        <section className="footer footer-4">
          <div className="footer-mid">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 me-auto col-sm-8">
                  <div className="footer-logo mb-3">
                    <img src={logo_white} alt="" className="img-fluid" />
                  </div>
                  <div className="widget footer-widget mb-5 mb-lg-0">
                    <p>
                      Edumel is a Bootstrap Template for online courses
                      education websites support multiple courses
                    </p>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title">Explore</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title ">Categories</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">SEO Business</a>
                      </li>
                      <li>
                        <a href="#">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="#">Graphic Design</a>
                      </li>
                      <li>
                        <a href="#">Social Marketing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title">Links</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <a href="#">News &amp; Blogs</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Return Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-4">
                  <div className="footer-widget mb-5 mb-lg-0">
                    <h5 className="widget-title">Address</h5>
                    <ul className="list-unstyled footer-links">
                      <li>
                        <h6 className="text-white">Phone</h6>
                        <a href="#">+0800 327 8534</a>
                      </li>
                      <li>
                        <h6 className="text-white">Email</h6>
                        <a href="#">support@edumel.com</a>
                      </li>
                    </ul>
                    <div className="footer-socials mt-4">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed-btm-top">
            <a href="#top-header" className="js-scroll-trigger scroll-to-top">
              <i className="fa fa-angle-up" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
