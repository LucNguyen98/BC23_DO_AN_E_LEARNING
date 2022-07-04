import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { author } from 'src/assets/images/blog';
import { course_author } from 'src/assets/images/course';
import { LazyLoadImg, NavLinkComponent } from 'src/components';
import { COURSE_REGISTER } from 'src/constants/pathName';
import {
  getCourseByCategoryAction,
  getCourseDetail,
} from 'src/redux/actions/courseAction';
import { coursesSelector } from 'src/redux/selectors/courseSelector';
import CourseSuggestList from './Component/CourseSuggestList/CourseSuggestList';

export default function CourseDetail() {
  const dispatch = useDispatch();
  const { maKhoaHoc } = useParams();
  const courseDetail = useSelector((state) => state.course.course);
  const courses = useSelector(coursesSelector);

  useEffect(() => {
    dispatch(getCourseDetail({ maKhoaHoc }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maKhoaHoc]);

  useEffect(() => {
    if (courseDetail?.danhMucKhoaHoc) {
      dispatch(
        getCourseByCategoryAction({
          maDanhMuc: courseDetail?.danhMucKhoaHoc?.maDanhMucKhoahoc,
        })
      );
    }
  }, [courseDetail, dispatch]);

  const coursesSuggest = useMemo(() => {
    const filters =
      courses?.filter((item) => item?.biDanh != courseDetail?.biDanh) || [];
    return filters?.slice(0, 4) || [];
  }, [courses, courseDetail]);

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
                          <span className="rating-count">
                            {' '}
                            {courseDetail.luotXem}
                          </span>
                        </div>
                      </li>
                      <li>
                        <i className="fa fa-user me-2" />{' '}
                        {courseDetail.soLuongHocVien} học viên
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
                        Giảng Viên
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
                          <h4 className="course-title">AI CÓ THỂ THAM GIA ?</h4>
                          <ul>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Mới học lập trình, thiếu định hướng & lộ trình
                                học tập
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Trái ngành học lập trình, chuyển nghề
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Hoàn thành chương trình trung học phổ thông
                                (12/12)
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Yếu tư duy lập trình, mất gốc muốn học để xin
                                việc
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Chủ dự án muốn quản lý team dev, startup muốn
                                hiểu rõ việc làm của dev
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Thêm nghề để kiếm thêm thu nhập ngoài giờ
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className="course-widget course-info">
                          <h4 className="course-title">
                            HỌC XONG LÀM VIỆC TẠI ĐÂU ?
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Apply vào tất cả công ty tuyển dụng Dev ở vị trí
                                fresher hoặc juinor
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Các công ty outsourcing - gia công phần mềm
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Các công ty startup - khởi nghiệp
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Công ty, tập đoàn trong nước và nước ngoài...
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Có thể apply ngay vào Fresher, Junior với mức
                                lương khởi điểm từ 7tr5 đến 15tr
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Nhận các job freelancer về xây dựng front end
                                cho website
                              </p>
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
                                <img
                                  src={author}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                              <div className="instructor-content">
                                <h4>{courseDetail?.nguoiTao?.hoTen}</h4>
                                <span className="sub-title">
                                  {courseDetail?.nguoiTao?.tenLoaiNguoiDung}
                                </span>
                                <p>
                                  <span
                                    style={{ 'text-transform': 'capitalize' }}
                                  >
                                    {courseDetail?.nguoiTao?.hoTen}
                                  </span>{' '}
                                  Giảng viên là các Senior đang làm tại các công
                                  ty, tập đoàn lớp như ELCA, NashTech, Global
                                  CyberSoft, KMS, ...giàu kinh nghiệm thực tế,
                                  truyển đạt tốt và tận tâm. Edumel nói KHÔNG
                                  với lý thuyết suông và vào học là phải CODE
                                  mỏi tay.
                                </p>
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
                                    src={'https://i.pravatar.cc?u=Ming Yuen'}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="user-content user-review-content">
                                  <div className="review-header mb-10">
                                    <h4 className="user-name">Ming Yuen</h4>
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
                                      <p>
                                        Khóa học xác định những điều chúng tôi
                                        muốn thay đổi và sau đó tìm ra những thứ
                                        cần được thực hiện để tạo ra kết quả
                                        mong muốn. Các khóa học đã giúp tôi xác
                                        định rõ ràng các vấn đề và tạo ra nhiều
                                        loại chất lượng hơn các giải pháp. Hỗ
                                        trợ phân tích cấu trúc khác trong số các
                                        tùy chọn dẫn đến các quyết định tốt hơn.
                                      </p>
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
                                    src={'https://i.pravatar.cc?u=Luc Nguyen'}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="user-content user-review-content">
                                  <div className="review-header mb-10">
                                    <h4 className="user-name">Luc Nguyen</h4>
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
                                      <p>
                                        Khóa học xác định những điều chúng tôi
                                        muốn thay đổi và sau đó tìm ra những thứ
                                        cần được thực hiện để tạo ra kết quả
                                        mong muốn. Các khóa học đã giúp tôi xác
                                        định rõ ràng các vấn đề và tạo ra nhiều
                                        loại chất lượng hơn các giải pháp. Hỗ
                                        trợ phân tích cấu trúc khác trong số các
                                        tùy chọn dẫn đến các quyết định tốt hơn.
                                      </p>
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
                      <span className="course-price-badge onsale">
                        Giảm 39%
                      </span>
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
                          {courseDetail.soLuongHocVien}
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
                            <i className="fa fa-globe" />
                            Ngôn Ngữ
                          </span>
                          Tiếng Việt
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
                      <NavLinkComponent
                        to={COURSE_REGISTER}
                        className="button button-enroll-course btn btn-main-2 rounded"
                      >
                        Ghi danh Khóa Học
                        <i className="fa fa-shopping-cart me-2" />
                      </NavLinkComponent>
                    </div>
                    <div className="course-meterial">
                      <h4 className="mb-3">Tài Liệu Liên Quan</h4>
                      <ul className="course-meterial-list">
                        <li>
                          <i className="fa fa-arrow-right"></i>
                          Videos
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i>
                          Lộ Trình Phát Triển
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i>
                          Tài Liệu
                        </li>
                      </ul>
                    </div>
                  </div>
                  {coursesSuggest.length > 0 && (
                    <CourseSuggestList data={coursesSuggest} />
                  )}
                </div>
                {/* Course Sidebar end */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return renderDetail(courseDetail);
}
