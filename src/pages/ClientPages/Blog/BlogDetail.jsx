import React from 'react';
import { author, blog_lg1, sm2, sm3, user } from 'src/assets/images/blog';

export default function BlogDetail() {
  return (
    <div>
      <div id="top-header">
        <div className="page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-8">
                <div className="post-single">
                  <div className="post-thumb">
                    <img src={blog_lg1} alt="" className="img-fluid" />
                  </div>
                  <div className="single-post-content">
                    <div className="post-meta">
                      <span className="post-author">bởi Admin</span>
                      <span className="post-date">
                        <i className="fa fa-calendar-alt mr-2" />
                        Ngày 9 Tháng 5, 2022
                      </span>
                      <span className="post-comments">
                        <i className="far fa-comments" />
                        15 Bình Luận
                      </span>
                    </div>
                    <h3 className="post-title">
                      {' '}
                      Digital Marketing khởi tạo Website của bạn, làm việc với
                      chúng tôi ngay.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem, omnis voluptatum iure expedita sequi obcaecati iste
                      dolores debitis numquam, reprehenderit eum consequuntur
                      cum, quam nesciunt esse tenetur architecto molestiae
                      adipisci.
                    </p>
                    <p>
                      Một số công cụ hỗ trợ SEO như là Google Keyword Planner
                      and Google Analytics cúng cấp định lượng ...
                    </p>
                    <blockquote>
                      Thiết kế tốt sẽ cải thiện doanh thu của bạn. Giao dự án
                      đúng tiến độ đề ra. Nó gọi là sự chuyên nghiệp. Xây dựng
                      trang Web của bạn với sự quan tâm.
                      <cite>- Admin</cite>
                    </blockquote>
                    <h4 className="inner-title">
                      SEO là một chiến lược quảng bá hiệu quả về chi phí.
                    </h4>
                    <p>
                      Một số công cụ hỗ trợ SEO như là Google Keyword Planner
                      and Google Analytics cúng cấp định lượng về dữ liệu để
                      giúp bạn hiểu về thị trường của mình, phân tích xu hướng,
                      và hiểu về chỗ đứng của đôi thủ. Giúp bạn xác định được
                      các từ khóa nổi bật và có giá trị để bạn có thể quyết định
                      xây dựng hoặc làm mới nội dung của bạn. Nó còn hỗ trợ
                      những cái nhìn chuyên sâu vào thị trường của bạn như là
                      địa điểm, thời gian hoạt động, tần suất tìm kiếm, công
                      nghệ được dùng, lựa chọn sản phẩm, ... Tất cả các chỉ số
                      này đều hữu ích trong việc trợ giúp bạn làm quen với khán
                      giả của mình.
                    </p>
                    <ol>
                      <li>Donec porta ultricies urna, faucib</li>
                      <li>Ultricies porta Donec urna, faucib</li>
                      <li>Porta ultricies urna, faucib</li>
                    </ol>
                    <h4 className="inner-title">
                      SEO là một chiến lược quảng bá hiệu quả về chi phí.
                    </h4>
                    <p>
                      {' '}
                      Nó còn hỗ trợ những cái nhìn chuyên sâu vào thị trường của
                      bạn như là địa điểm, thời gian hoạt động, tần suất tìm
                      kiếm, công nghệ được dùng, lựa chọn sản phẩm, ... Tất cả
                      các chỉ số này đều hữu ích trong việc trợ giúp bạn làm
                      quen với khán giả của mình.
                    </p>
                    <ul>
                      <li>Lo đã kiếm được nó với giá 28 triệu đô la.</li>
                      <li>Ultricies porta Donec urna, faucib</li>
                      <li>
                        Lo đã kiếm được nó với giá 28 triệu đô la. Như Bronx mua
                        lại bản địa{' '}
                      </li>
                      <li>
                        Khách sạn hoàn chỉnh với phòng chiếu 30 chỗ, 100 chỗ
                        ngồi{' '}
                      </li>
                    </ul>
                  </div>
                  <div className="blog-footer-meta d-md-flex justify-content-between align-items-center">
                    <div className="post-tags mb-4 mb-md-0">
                      <a href="#">Thiết Kế</a>
                      <a href="#">Phát Triển</a>
                      <a href="#">UX</a>
                    </div>
                    <div className="article-share d-md-flex align-items-center">
                      <h6>Chia sẻ: </h6>
                      <ul className="social-icon">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {' '}
                            <i className="fab fa-twitter" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {' '}
                            <i className="fab fa-instagram" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-single-author mb-5">
                    <div className="author-img">
                      <img src={author} alt="" className="img-fluid" />
                    </div>
                    <div className="author-info">
                      <h4>Mikel John</h4>
                      <span>Lập trình viên Web</span>
                      <p>
                        Lorem ipsum dolor sit amet Officia enim nihil accusamus
                        error perspiciatis nam quas distinctio nobis, quibusdam
                        mollitia totam ipsam obcaecati, iusto alias
                        reprehenderit tempora placeat voluptates eligendi.
                      </p>
                    </div>
                  </div>
                  <div className="comments common-form">
                    <h3 className="title">2 Bình Luận</h3>
                    <div className="comment-box">
                      <div className="comment-avatar">
                        <img src={user} className="me-3" alt="..." />
                      </div>
                      <div className="comment-info">
                        <h5>Harish John</h5>
                        <span>17/02/2021</span>
                        <p>
                          {' '}
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Fusce condimentum
                          nunc ac nisi vulputate fringilla. Donec lacinia congue
                          felis in faucibus.{' '}
                        </p>
                        <a className="reply-link" href="#">
                          <i className="fas fa-reply-all" />
                          Trả Lời
                        </a>
                      </div>
                    </div>
                    <div className="has-children">
                      <div className="comment-box">
                        <div className="comment-avatar">
                          <img src={user} className="me-3" alt="..." />
                        </div>
                        <div className="comment-info">
                          <h5>Harish John</h5>
                          <span>17/02/2021</span>
                          <p>
                            {' '}
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Fusce
                            condimentum nunc ac nisi vulputate fringilla. Donec
                            lacinia congue felis in faucibus.{' '}
                          </p>
                          <a className="reply-link" href="#">
                            <i className="fas fa-reply-all" />
                            Trả Lời
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="comment-box">
                      <div className="comment-avatar">
                        <img src={user} className="me-3" alt="..." />
                      </div>
                      <div className="comment-info">
                        <h5>Harish John </h5>
                        <span>17/02/2021</span>
                        <p>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Fusce condimentum
                          nunc ac nisi vulputate fringilla. Donec lacinia congue
                          felis in faucibus.{' '}
                        </p>
                        <a className="reply-link" href="#">
                          <i className="fas fa-reply-all" />
                          Trả Lời
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comments-form common-form mt-4 ">
                    <h3 className="titile">Hãy để lại bình luận </h3>
                    <p>
                      Email của bạn sẽ không được công khai. Những trường bắt
                      buộc sẽ đánh dấu *
                    </p>
                    <form action="#" className="comment_form">
                      <div className="row form-row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Họ Tên"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Website"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              name="msg"
                              id="msgt"
                              cols={30}
                              rows={6}
                              placeholder="Bình Luận"
                              className="form-control"
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <a href="#" className="btn btn-main rounded">
                              Đăng Bình Luận
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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
                        <a href="#">Thiết kế Web</a>(4)
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
      </div>
    </div>
  );
}
