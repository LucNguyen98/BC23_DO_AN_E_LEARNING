import React from 'react';
import './Footer.scss';
export default function Footer() {
  return (
    <div>
      <footer className="footer footer-3 pt-250">
        <div className="footer-mid">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-sm-8 me-auto">
                <div className="widget footer-widget mb-5 mb-lg-0">
                  <div className="footer-logo">
                    <img
                      src="/images/logo-white.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <p className="mt-4">
                    Edumel là một Bootstrap Template cho các trang web giáo dục
                    các khóa học trực tuyến hỗ trợ nhiều khóa học
                  </p>
                  <div className="footer-socials mt-5">
                    <span className="me-2">Liên Hệ :</span>
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
              <div className="col-xl-2 col-sm-4">
                <div className="footer-widget mb-5 mb-lg-0">
                  <h5 className="widget-title">Khám Phá</h5>
                  <ul className="list-unstyled footer-links">
                    <li>
                      <a href="#">Về chúng tôi</a>
                    </li>
                    <li>
                      <a href="#">Liện hệ</a>
                    </li>
                    <li>
                      <a href="#">Dịch vụ</a>
                    </li>
                    <li>
                      <a href="#">Hỡ trợ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-4">
                <div className="footer-widget mb-5 mb-lg-0">
                  <h5 className="widget-title ">Chương Trình</h5>
                  <ul className="list-unstyled footer-links">
                    <li>
                      <a href="#">SEO cho doanh nghiệp</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Thiết kế đồ họa</a>
                    </li>
                    <li>
                      <a href="#">Social Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-4">
                <div className="footer-widget mb-5 mb-lg-0">
                  <h5 className="widget-title">Đường Dẫn</h5>
                  <ul className="list-unstyled footer-links">
                    <li>
                      <a href="#">Tin tức &amp; bài viết</a>
                    </li>
                    <li>
                      <a href="#">Chính sách bảo mật</a>
                    </li>
                    <li>
                      <a href="#">Hỗ trợ</a>
                    </li>
                    <li>
                      <a href="#">Chính sách hoàn trả</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-sm-4">
                <div className="footer-widget mb-5 mb-lg-0">
                  <h5 className="widget-title">Địa chỉ</h5>
                  <ul className="list-unstyled footer-links">
                    <li>
                      <a href="#">+0800 327 8534</a>
                    </li>
                    <li>
                      <a href="#">support@edumel.com</a>
                    </li>
                    <li>
                      <a href="#">
                        Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-sm-12 col-lg-6">
                <p className="mb-0 copyright text-sm-center text-lg-start">
                  © 2021 Edumel All rights reserved by{' '}
                  <a href="https://themeturn.com" rel="nofollow">
                    Dreambuzz
                  </a>{' '}
                </p>
              </div>
              <div className="col-xl-6 col-sm-12 col-lg-6">
                <div className="footer-btm-links text-start text-sm-center text-lg-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">Điều khoản dịch vụ</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Tham gia</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Chính sách bảo mật</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
