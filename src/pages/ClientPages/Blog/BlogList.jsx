import React from 'react';
import { logo_white } from 'src/assets/images';
import { blog1, blog2, blog3, sm2, sm3 } from 'src/assets/images/blog';

export default function BlogList() {
  return (
    <div>
      <div id="top-header">
        <div className="page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="blog-item mb-30">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src={blog1} alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="post-meta">
                          <span className="post-author">bởi Admin</span>
                          <span className="post-date">
                            <i className="fa fa-calendar-alt mr-2" />
                            09/05/2021
                          </span>
                          <span className="post-comments">
                            <i className="far fa-comments" />
                            15{' '}
                          </span>
                        </div>
                        <h3 className="post-title">
                          {' '}
                          <a href="blog-single.html">
                            Thách thức của việc học toàn cầu trong giáo dục công
                          </a>
                        </h3>
                        <p>
                          Amet consectetur adipisicing elit. Libero repudiandae
                          provident quas necessitatibus placeat provident elit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-item mb-30">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src={blog2} alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="post-meta">
                          <span className="post-author">bởi Admin</span>
                          <span className="post-date">
                            <i className="fa fa-calendar-alt mr-2" />
                            09/05/2021
                          </span>
                          <span className="post-comments">
                            <i className="far fa-comments" />
                            15{' '}
                          </span>
                        </div>
                        <h3 className="post-title">
                          {' '}
                          <a href="blog-single.html">
                            Giấy chứng nhận Google Ads: Chúng có xứng đáng
                            không?
                          </a>
                        </h3>
                        <p>
                          Amet consectetur adipisicing elit. Libero repudiandae
                          provident quas necessitatibus placeat provident elit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-item mb-30">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src={blog3} alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="post-meta">
                          <span className="post-author">bởi Admin</span>
                          <span className="post-date">
                            <i className="fa fa-calendar-alt mr-2" />
                            09/05/2021
                          </span>
                          <span className="post-comments">
                            <i className="far fa-comments" />
                            15{' '}
                          </span>
                        </div>
                        <h3 className="post-title">
                          {' '}
                          <a href="blog-single.html">
                            Thu hút sự quan tâm của bạn hơn bao giờ hết{' '}
                          </a>
                        </h3>
                        <p>
                          Amet consectetur adipisicing elit. Libero repudiandae
                          provident quas necessitatibus placeat provident elit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog-item mb-30">
                      <div className="post-thumb">
                        <a href="blog-single.html">
                          <img src={blog2} alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="post-meta">
                          <span className="post-author">bởi Admin</span>
                          <span className="post-date">
                            <i className="fa fa-calendar-alt mr-2" />
                            09/05/2021
                          </span>
                          <span className="post-comments">
                            <i className="far fa-comments" />
                            15{' '}
                          </span>
                        </div>
                        <h3 className="post-title">
                          {' '}
                          <a href="blog-single.html">
                            Cách quản lý quảng cáo Facebook cho khách hàng đúng
                            cách
                          </a>
                        </h3>
                        <p>
                          Amet consectetur adipisicing elit. Libero repudiandae
                          provident quas necessitatibus placeat provident elit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="blog-page-navigation">
                  <ul className="pagination">
                    <li className="pagination-arrow">
                      <a href="#">
                        <i className="fa fa-angle-double-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li className="pagination-arrow">
                      <a href="#">
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="blog-sidebar mt-5 mt-lg-0">
                  <div className="widget widget-search">
                    <form role="search" className="search-form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="search-submit">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  <div className="widget widget_latest_post">
                    <h4 className="widget-title">Bài Đăng Mới Nhất</h4>
                    <div className="recent-posts">
                      <div className="single-latest-post">
                        <div className="widget-thumb">
                          <a href="blog-single.html">
                            <img src={sm3} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-content">
                          <h5>
                            {' '}
                            <a href="blog-single.html">
                              Nền tảng tùy chỉnh cho bảo hiểm kiểm toán
                            </a>
                          </h5>
                          <span>
                            <i className="fa fa-calendar-times" />
                            10/04/2021
                          </span>
                        </div>
                      </div>
                      <div className="single-latest-post">
                        <div className="widget-thumb">
                          <a href="blog-single.html">
                            <img src={sm2} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-content">
                          <h5>
                            {' '}
                            <a href="blog-single.html">
                              Các nhà phát triển ứng dụng nổi tiếng nhất thế
                              giới
                            </a>
                          </h5>
                          <span>
                            <i className="fa fa-calendar-times" />
                            10/04/2021
                          </span>
                        </div>
                      </div>
                      <div className="single-latest-post">
                        <div className="widget-thumb">
                          <a href="blog-single.html">
                            <img src={sm3} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-content">
                          <h5>
                            {' '}
                            <a href="blog-single.html">
                              Là một nhà tiếp thị được đánh giá cao nhất
                            </a>
                          </h5>
                          <span>
                            <i className="fa fa-calendar-times" />
                            10/04/2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_categories">
                    <h4 className="widget-title">Phân Loại</h4>
                    <ul>
                      <li className="cat-item">
                        <a href="#">Thiêt Kế Web</a>(4)
                      </li>
                      <li className="cat-item">
                        <a href="#">Wordpress</a>(14)
                      </li>
                      <li className="cat-item">
                        <a href="#">Marketing</a>(24)
                      </li>
                      <li className="cat-item">
                        <a href="#">Thiết kế &amp; phát triển</a>(6)
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h4 className="widget-title">Thể loại</h4>
                    <a href="#">Thiết Kế</a>
                    <a href="#">Phát Triển</a>
                    <a href="#">UX</a>
                    <a href="#">Marketing</a>
                    <a href="#">Mẹo</a>
                    <a href="#">Ui</a>
                    <a href="#">Miễn phí</a>
                    <a href="#">Wordpress</a>
                    <a href="#">bootstrap</a>
                    <a href="#">Hướng dẫn</a>
                    <a href="#">Html</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
