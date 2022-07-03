import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { author } from 'src/assets/images/blog';
import { course_2, course_author } from 'src/assets/images/course';
import { LazyLoadImg } from 'src/components';
import { getCourseDetail } from 'src/redux/actions/courseAction';

export default function CourseDetail() {
  const dispatch = useDispatch();
  const { maKhoaHoc } = useParams();
  const courseDetail = useSelector((state) => state.course.course);
  console.log(courseDetail);

  useEffect(() => {
    dispatch(getCourseDetail({ maKhoaHoc }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maKhoaHoc]);

  const renderDetail = (courseDetail) => {
    return (
      <div>
        <section className="course-page-header page-header-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-xl-7">
                <div className="course-header-wrapper mb-0 bg-transparent">
                  <h1 className="mb-3">{courseDetail.tenKhoaHoc}</h1>
                  <p>{courseDetail.moTa}</p>
                  <div className="course-header-meta">
                    <ul className="inline-list list-info">
                      <li>
                        <div className="course-author">
                          <img src={course_author} alt="#" />
                          {courseDetail?.nguoiTao?.hoTen}
                        </div>
                      </li>
                      <li>
                        <div className="list-rating">
                          <span>
                            <i className="fas fa-star" />
                          </span>
                          <span>
                            <i className="fas fa-star" />
                          </span>
                          <span>
                            <i className="fas fa-star" />
                          </span>
                          <span>
                            <i className="fas fa-star" />
                          </span>
                          <span>
                            <i className="fas fa-star" />
                          </span>
                          <span className="rating-count">{' '}{courseDetail.luotXem}</span>
                        </div>
                      </li>
                      <li>
                        <i className="fa fa-user me-2" />
                        {courseDetail.soLuongHocVien} {' '} học viên
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="course-thumb-wrap">
                  <div className="course-thumbnail mb-0">
                    <LazyLoadImg
                      src={courseDetail?.hinhAnh}
                      alt=""
                      height={200}
                      style={{
                        width: '100%',
                        objectFit: 'fill',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tutori-course-single tutori-course-layout-3 page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="tutori-course-content">
                  <nav className="course-single-tabs learn-press-nav-tabs">
                    <div
                      className="nav nav-tabs course-nav"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home-tab"
                        aria-selected="true"
                      >
                        Tổng Quan
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-instructor-tab"
                        data-toggle="tab"
                        href="#nav-instructor"
                        role="tab"
                        aria-controls="nav-instructor-tab"
                        aria-selected="false"
                      >
                        Hướng Dẫn Viên
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-feedback-tab"
                        data-toggle="tab"
                        href="#nav-feedback"
                        role="tab"
                        aria-controls="nav-feedback-tab"
                        aria-selected="false"
                      >
                        Đánh Giá
                      </a>
                    </div>
                  </nav>
                  <div
                    className="tab-content tutori-course-content"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="single-course-details ">
                        <h4 className="course-title">Mô Tả</h4>
                        <p>{courseDetail.moTa}</p>
                        <div className="course-widget course-info">
                          <h4 className="course-title">Các Kiến Thức Sẽ Được Học:</h4>
                          <ul>
                            <li>
                              <i className="fa fa-check" />
                              Xóa các khuyết điểm trên khuôn mặt, cải thiện và sửa chữa ảnh
                            </li>
                            <li>
                              <i className="fa fa-check" />
                              Xóa người hoặc đồ vật khỏi ảnh
                            </li>
                            <li>
                              <i className="fa fa-check" />
                              Làm chủ các lựa chọn, lớp và làm việc với bảng điều khiển lớp
                            </li>
                            <li>
                              <i className="fa fa-check" />
                              Sử dụng các hiệu ứng sáng tạo để thiết kế các kiểu văn bản tuyệt đẹp
                            </li>
                            <li>
                              <i className="fa fa-check" />
                              Làm việc với bảng điều khiển lớp
                            </li>
                            <li>
                              <i className="fa fa-check" />
                              Loại bỏ một người khỏi nền tảng của họ
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-instructor"
                      role="tabpanel"
                      aria-labelledby="nav-instructor-tab"
                    >
                      {/* Course instructor start */}
                      <div className="courses-instructor">
                        <div className="single-instructor-box">
                          <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                              <div className="instructor-image">
                                <img src={author} alt="" className="img-fluid" />
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                              <div className="instructor-content">
                                <h4>
                                  <a href="#">{courseDetail?.nguoiTao?.hoTen}</a>
                                </h4>
                                <span className="sub-title">{courseDetail?.nguoiTao?.tenLoaiNguoiDung}</span>
                                <p>
                                  <span style={{'text-transform':'capitalize'}}>{courseDetail?.nguoiTao?.hoTen}</span> là một nhiếp ảnh gia, tác giả và nhà văn nổi tiếng, 
                                  người mang lại niềm đam mê cho mọi thứ mà anh ấy làm.
                                </p>
                                <div className="intructor-social-links">
                                  <span className="me-2">Mạng Xã Hội: </span>
                                  <a href="#">
                                    {' '}
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                  <a href="#">
                                    {' '}
                                    <i className="fab fa-twitter" />
                                  </a>
                                  <a href="#">
                                    {' '}
                                    <i className="fab fa-linkedin-in" />
                                  </a>
                                  <a href="#">
                                    {' '}
                                    <i className="fab fa-youtube" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Conurse  instructor end */}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-feedback"
                      role="tabpanel"
                      aria-labelledby="nav-feedback-tab"
                    >
                      <div id="course-reviews">
                        <ul className="course-reviews-list">
                          <li>
                            <div className="course-review">
                              <div className="course-single-review">
                                <div className="user-image">
                                  <img
                                    src={author}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="user-content user-review-content">
                                  <div className="review-header mb-10">
                                    <h4 className="user-name">Tutori</h4>
                                    <p className="review-title">
                                    Bao gồm tất cả các chủ đề{' '}
                                    </p>
                                    <div className="rating review-stars-rated">
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star-half" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="review-text">
                                    <div className="review-content">
                                      Khóa học xác định những điều chúng tôi muốn thay đổi
                                      và sau đó tìm ra những thứ cần
                                      được thực hiện để tạo ra kết quả mong muốn. Các
                                      khóa học đã giúp tôi xác định rõ ràng các vấn đề
                                      và tạo ra nhiều loại chất lượng hơn
                                      các giải pháp. Hỗ trợ phân tích cấu trúc khác
                                      trong số các tùy chọn dẫn đến các quyết định tốt hơn.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="course-review">
                              <div className="course-single-review">
                                <div className="user-image">
                                  <img
                                    src={author}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="user-content user-review-content">
                                  <div className="review-header mb-10">
                                    <h4 className="user-name">Tutori</h4>
                                    <p className="review-title">
                                    Bao gồm tất cả các chủ đề{' '}
                                    </p>
                                    <div className="rating review-stars-rated">
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star" />
                                      </a>
                                      <a href="#">
                                        <i className="fa fa-star-half" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="review-text">
                                    <div className="review-content">
                                      Khóa học xác định những điều chúng tôi muốn thay đổi
                                      và sau đó tìm ra những thứ cần
                                      được thực hiện để tạo ra kết quả mong muốn. Các
                                      khóa học đã giúp tôi xác định rõ ràng các vấn đề
                                      và tạo ra nhiều loại chất lượng hơn
                                      các giải pháp. Hỗ trợ phân tích cấu trúc khác
                                      trong số các tùy chọn dẫn đến các quyết định tốt hơn.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                {/* Course Sidebar start */}
                <div className="course-sidebar course-sidebar-5 mt-5 mt-xl-0">
                  <div className="course-widget course-details-info">
                    <div className="price-header">
                      <h2 className="course-price">
                        $120.00 <span>$150</span>
                      </h2>
                      <span className="course-price-badge onsale">Giảm 39%</span>
                    </div>
                    <ul className="course-sidebar-list">
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-sliders-h" />
                            Độ Khó
                          </span>
                          Người Bắt Đầu
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fas fa-play-circle" />
                            Bài Giảng
                          </span>
                          2
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-user" />
                            Số Lượng Học Viên
                          </span>
                          20
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-clock" />
                            Thời Lượng
                          </span>
                          6 giờ
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-globe" />
                            Ngôn Ngữ
                          </span>
                          Tiếng Anh
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-calendar" />
                            Ngày Tạo{' '}
                          </span>
                          {courseDetail.ngayTao}
                        </div>
                      </li>
                    </ul>
                    <div className="buy-btn">
                      <button className="button button-enroll-course btn btn-main-2 rounded">
                        <i className="far fa-shopping-cart me-2" /> Tham Gia Khóa Học
                      </button>
                    </div>
                    <div className="course-meterial">
                      <h4 className="mb-3">Tài Liệu Liên Quan</h4>
                      <ul className="course-meterial-list">
                        <li>
                          <i className="fal fa-long-arrow-right" />
                          Videos
                        </li>
                        <li>
                          <i className="fal fa-long-arrow-right" />
                          Lộ Trình Phát Triển
                        </li>
                        <li>
                          <i className="fal fa-long-arrow-right" />
                          Tài Liệu
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="course-latest">
                    <h4 className="mb-4">Những Khóa Học Tham Khảo</h4>
                    <ul className="recent-posts course-popular">
                      <li>
                        <div className="widget-post-thumb">
                          <a href="#">
                            <img src={course_2} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-post-body">
                          <h6>
                            {' '}
                            <a href="#">Làm Việc Với Theme Wordpress</a>
                          </h6>
                          <h5>$120</h5>
                        </div>
                      </li>
                      <li>
                        <div className="widget-post-thumb">
                          <a href="#">
                            <img src={course_2} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-post-body">
                          <h6>
                            {' '}
                            <a href="#">Thành thạo Photoshop cho người mới bắt đầu</a>
                          </h6>
                          <h5>$100</h5>
                        </div>
                      </li>
                      <li>
                        <div className="widget-post-thumb">
                          <a href="#">
                            <img src={course_2} alt="" className="img-fluid" />
                          </a>
                        </div>
                        <div className="widget-post-body">
                          <h6>
                            {' '}
                            <a href="#">Thành Thạo Công Cụ Adobe</a>
                          </h6>
                          <h5>$100</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Course Sidebar end */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return renderDetail(courseDetail);
}
