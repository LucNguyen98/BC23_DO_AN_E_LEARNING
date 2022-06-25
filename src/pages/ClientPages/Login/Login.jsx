import React from 'react'
import { logo_white } from 'src/assets/images'

export default function Login() {
    return (
        <div>
            <div id='top-header'>
                <section className="page-wrapper woocommerce single">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-xl-5">
                                <div className="woocommerce-notices-wrapper" />
                                <div className="login-form">
                                    <div className="form-header">
                                        <h2 className="font-weight-bold mb-3">Login</h2>
                                        <p className="woocommerce-register">
                                            Do not have an account yet? 
                                            <a href="#" className="text-decoration-underline">Sign Up for Free</a>
                                        </p>
                                    </div>
                                    <form className="woocommerce-form woocommerce-form-login login" method="post">
                                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label htmlFor="username">Username or email address&nbsp;<span className="required">*</span></label>
                                            <input type="text" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="username" id="username" autoComplete="username" defaultValue placeholder="Username or Email" />
                                        </p>
                                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                            <label htmlFor="password">Password&nbsp;<span className="required">*</span></label>
                                            <input className="woocommerce-Input woocommerce-Input--text input-text form-control" type="password" name="password" id="password" autoComplete="current-password" placeholder="Password" />
                                        </p>
                                        <div className="d-flex align-items-center justify-content-between py-2">
                                            <p className="form-row">
                                                <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                                                    <input className="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" />
                                                    <span>Remember me</span>
                                                </label>
                                            </p>
                                            <p className="woocommerce-LostPassword lost_password">
                                                <a href="#">Forgot password?</a>
                                            </p>
                                        </div>
                                        <p className="form-row">
                                            <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" defaultValue="a414dce984" /><input type="hidden" name="_wp_http_referer" defaultValue="/my-account/" />
                                            <button type="submit" className="woocommerce-button button woocommerce-form-login__submit" name="login" value="Log in">Log in</button>
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
                                        <p>Edumel is a Bootstrap Template for online courses
                                            education websites support multiple courses</p>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-sm-4">
                                    <div className="footer-widget mb-5 mb-lg-0">
                                        <h5 className="widget-title">Explore</h5>
                                        <ul className="list-unstyled footer-links">
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Support</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-sm-4">
                                    <div className="footer-widget mb-5 mb-lg-0">
                                        <h5 className="widget-title ">Categories</h5>
                                        <ul className="list-unstyled footer-links">
                                            <li><a href="#">SEO Business</a></li>
                                            <li><a href="#">Digital Marketing</a></li>
                                            <li><a href="#">Graphic Design</a></li>
                                            <li><a href="#">Social Marketing</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-sm-4">
                                    <div className="footer-widget mb-5 mb-lg-0">
                                        <h5 className="widget-title">Links</h5>
                                        <ul className="list-unstyled footer-links">
                                            <li><a href="#">News &amp; Blogs</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Support</a></li>
                                            <li><a href="#">Return Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-sm-4">
                                    <div className="footer-widget mb-5 mb-lg-0">
                                        <h5 className="widget-title">Address</h5>
                                        <ul className="list-unstyled footer-links">
                                            <li>
                                                <h6 className="text-white">Phone</h6><a href="#">+0800 327 8534</a>
                                            </li>
                                            <li>
                                                <h6 className="text-white">Email</h6><a href="#">support@edumel.com</a>
                                            </li>
                                        </ul>
                                        <div className="footer-socials mt-4">
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                                            <a href="#"><i className="fab fa-pinterest" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="fixed-btm-top">
                        <a href="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa fa-angle-up" /></a>
                    </div>
                </section>
            </div>

        </div>
    )
}
