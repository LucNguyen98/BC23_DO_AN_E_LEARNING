import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
                        {courseDetail.soLuongHocVien} h???c vi??n
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
                        T???ng Quan
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
                        Gi???ng Vi??n
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
                        ????nh Gi??
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
                        <h4 className="course-title">M?? T???</h4>
                        <p>{courseDetail.moTa}</p>

                        <div className="course-widget course-info">
                          <h4 className="course-title">AI C?? TH??? THAM GIA ?</h4>
                          <ul>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                M???i h???c l???p tr??nh, thi???u ?????nh h?????ng & l??? tr??nh
                                h???c t???p
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Tr??i ng??nh h???c l???p tr??nh, chuy???n ngh???
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Ho??n th??nh ch????ng tr??nh trung h???c ph??? th??ng
                                (12/12)
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Y???u t?? duy l???p tr??nh, m???t g???c mu???n h???c ????? xin
                                vi???c
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Ch??? d??? ??n mu???n qu???n l?? team dev, startup mu???n
                                hi???u r?? vi???c l??m c???a dev
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Th??m ngh??? ????? ki???m th??m thu nh???p ngo??i gi???
                              </p>
                            </li>
                          </ul>
                        </div>

                        <div className="course-widget course-info">
                          <h4 className="course-title">
                            H???C XONG L??M VI???C T???I ????U ?
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Apply v??o t???t c??? c??ng ty tuy???n d???ng Dev ??? v??? tr??
                                fresher ho???c juinor
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                C??c c??ng ty outsourcing - gia c??ng ph???n m???m
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                C??c c??ng ty startup - kh???i nghi???p
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                C??ng ty, t???p ??o??n trong n?????c v?? n?????c ngo??i...
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                C?? th??? apply ngay v??o Fresher, Junior v???i m???c
                                l????ng kh???i ??i???m t??? 7tr5 ?????n 15tr
                              </p>
                            </li>
                            <li>
                              <p>
                                <i className="fa fa-check text-danger" />
                                Nh???n c??c job freelancer v??? x??y d???ng front end
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
                                  Gi???ng vi??n l?? c??c Senior ??ang l??m t???i c??c c??ng
                                  ty, t???p ??o??n l???p nh?? ELCA, NashTech, Global
                                  CyberSoft, KMS, ...gi??u kinh nghi???m th???c t???,
                                  truy???n ?????t t???t v?? t???n t??m. Edumel n??i KH??NG
                                  v???i l?? thuy???t su??ng v?? v??o h???c l?? ph???i CODE
                                  m???i tay.
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
                                      Bao g???m t???t c??? c??c ch??? ?????{' '}
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
                                        Kh??a h???c x??c ?????nh nh???ng ??i???u ch??ng t??i
                                        mu???n thay ?????i v?? sau ???? t??m ra nh???ng th???
                                        c???n ???????c th???c hi???n ????? t???o ra k???t qu???
                                        mong mu???n. C??c kh??a h???c ???? gi??p t??i x??c
                                        ?????nh r?? r??ng c??c v???n ????? v?? t???o ra nhi???u
                                        lo???i ch???t l?????ng h??n c??c gi???i ph??p. H???
                                        tr??? ph??n t??ch c???u tr??c kh??c trong s??? c??c
                                        t??y ch???n d???n ?????n c??c quy???t ?????nh t???t h??n.
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
                                      Bao g???m t???t c??? c??c ch??? ?????{' '}
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
                                        Kh??a h???c x??c ?????nh nh???ng ??i???u ch??ng t??i
                                        mu???n thay ?????i v?? sau ???? t??m ra nh???ng th???
                                        c???n ???????c th???c hi???n ????? t???o ra k???t qu???
                                        mong mu???n. C??c kh??a h???c ???? gi??p t??i x??c
                                        ?????nh r?? r??ng c??c v???n ????? v?? t???o ra nhi???u
                                        lo???i ch???t l?????ng h??n c??c gi???i ph??p. H???
                                        tr??? ph??n t??ch c???u tr??c kh??c trong s??? c??c
                                        t??y ch???n d???n ?????n c??c quy???t ?????nh t???t h??n.
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
                        Gi???m 39%
                      </span>
                    </div>
                    <ul className="course-sidebar-list">
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-sliders-h" />
                            ????? Kh??
                          </span>
                          Ng?????i B???t ?????u
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fas fa-play-circle" />
                            B??i Gi???ng
                          </span>
                          2
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-user" />
                            S??? L?????ng H???c Vi??n
                          </span>
                          {courseDetail.soLuongHocVien}
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-clock" />
                            Th???i L?????ng
                          </span>
                          6 gi???
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fa fa-globe" />
                            Ng??n Ng???
                          </span>
                          Ti???ng Vi???t
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-calendar" />
                            Ng??y T???o{' '}
                          </span>
                          {courseDetail.ngayTao}
                        </div>
                      </li>
                    </ul>
                    <div className="buy-btn">
                      <NavLinkComponent
                        to={`${COURSE_REGISTER}/${maKhoaHoc}`}
                        className="button button-enroll-course btn btn-main-2 rounded"
                      >
                        Ghi danh Kh??a H???c
                        <i className="fa fa-shopping-cart me-2" />
                      </NavLinkComponent>
                    </div>
                    <div className="course-meterial">
                      <h4 className="mb-3">T??i Li???u Li??n Quan</h4>
                      <ul className="course-meterial-list">
                        <li>
                          <i className="fa fa-arrow-right"></i>
                          Videos
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i>
                          L??? Tr??nh Ph??t Tri???n
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i>
                          T??i Li???u
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
