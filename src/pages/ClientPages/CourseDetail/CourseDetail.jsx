import React from 'react';
import { author } from 'src/assets/images/blog';
import { course_2, course_author, img_02 } from 'src/assets/images/course';

export default function CourseDetail() {
  return (
    <div>
      <section className="course-page-header page-header-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-7">
              <div className="course-header-wrapper mb-0 bg-transparent">
                <h1 className="mb-3">Mastering PHP from zero to hero</h1>
                <p>
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more
                  ametion consectetur elit. Vesti at bulum nec odio. Dacere
                  agemusque constantius concessis elit videmusne quia stoici
                  constructio dissimillimas audiunt homerus commendationes
                </p>
                <div className="course-header-meta">
                  <ul className="inline-list list-info">
                    <li>
                      <div className="course-author">
                        <img src={course_author} alt="#" />
                        Madge Alvarez
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
                        <span className="rating-count">(19)</span>
                      </div>
                    </li>
                    <li>
                      <i className="fa fa-user me-2" />
                      11 enrolled students
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="course-thumb-wrap">
                <div className="course-thumbnail mb-0">
                  <img src={img_02} alt="" className="img-fluid w-100" />
                </div>
                <a
                  className="popup-video video_icon"
                  href="https://www.youtube.com/watch?v=cRXm1p-CNyk"
                >
                  <i className="fa fa-play"></i>
                </a>
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
                      Overview
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-topics-tab"
                      data-toggle="tab"
                      href="#nav-topics"
                      role="tab"
                      aria-controls="nav-topics-tab"
                      aria-selected="false"
                    >
                      Curriculam
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
                      Instructor
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
                      Reviews
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
                      <h4 className="course-title">Description</h4>
                      <p>
                        Knowing PHP has allowed me to make enough money to stay
                        home and make courses like this one for students all
                        over the world. Being a PHP developer can allow anyone
                        to make really good money online and offline, developing
                        dynamic applications. Knowing PHP will allow you to
                        build web applications, websites or Content Management
                        systems, like WordPress, Facebook, Twitter or even
                        Google. There is no limit to what you can do with this
                        knowledge. PHP is one of the most important web
                        programming languages to learn, and knowing it, will
                        give you SUPER POWERS in the web
                      </p>
                      <div className="course-widget course-info">
                        <h4 className="course-title">What You will Learn?</h4>
                        <ul>
                          <li>
                            <i className="fa fa-check" />
                            Clean up face imperfections, improve and repair
                            photos
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Remove people or objects from photos
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Master selections, layers, and working with the
                            layers panel
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Use creative effects to design stunning text styles
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            working with the layers panel
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Cut away a person from their background
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-topics"
                    role="tabpanel"
                    aria-labelledby="nav-topics-tab"
                  >
                    <div className="tutori-course-curriculum">
                      <div className="curriculum-scrollable">
                        <ul className="curriculum-sections">
                          <li className="section">
                            <div className="section-header">
                              <div className="section-left">
                                <h5 className="section-title">
                                  Change simplification
                                </h5>
                                <p className="section-desc">
                                  Dacere agemusque constantius concessis elit
                                  videmusne quia stoici constructio
                                  dissimillimas audiunt homerus commendationes
                                </p>
                              </div>
                            </div>
                            <ul className="section-content">
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">
                                    The importance of data nowsaday
                                  </span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      10.30 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">
                                    Why my organization should know about data
                                  </span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      20.30 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                              <li className="course-item course-item-lp_assignment course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">Assignments</span>
                                  <div className="course-item-meta">
                                    <span className="item-meta count-questions">
                                      14 questions
                                    </span>
                                    <span className="item-meta duration">
                                      10.21 min
                                    </span>
                                    <i className="fa item-meta course-item-status trans" />
                                  </div>
                                </a>
                              </li>
                              <li className="course-item course-item-lp_quiz course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">Quiz 1</span>
                                  <div className="course-item-meta">
                                    <span className="item-meta count-questions">
                                      14 questions
                                    </span>
                                    <span className="item-meta duration">
                                      5.67 min
                                    </span>
                                    <i className="fa item-meta course-item-status trans" />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          {/* section end */}
                          <li className="section">
                            <div className="section-header">
                              <div className="section-left">
                                <h5 className="section-title">Key concepts </h5>
                                <p className="section-desc">
                                  Dacere agemusque constantius concessis elit
                                  videmusne quia stoici constructio
                                  dissimillimas audiunt homerus commendationes
                                </p>
                              </div>
                            </div>
                            <ul className="section-content">
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">
                                    Basic understanding of data management
                                    concepts
                                  </span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      10 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          {/* section end */}
                          <li className="section">
                            <ul className="section-content">
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">
                                    Apply the principles{' '}
                                  </span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      10 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">Lesson 2</span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      20 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                              <li className="course-item has-status course-item-lp_lesson">
                                <a className="section-item-link" href="#">
                                  <span className="item-name">Lesson 3</span>
                                  <div className="course-item-meta">
                                    <span className="item-meta duration">
                                      5 min
                                    </span>
                                    <i className="item-meta course-item-status" />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          {/* section end */}
                        </ul>
                        {/* Main ul end */}
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
                                <a href="#">Tutori</a>
                              </h4>
                              <span className="sub-title">Web Developer</span>
                              <p>
                                Jone Smit is a celebrated photographer, author,
                                and writer who brings passion to everything he
                                does.
                              </p>
                              <div className="intructor-social-links">
                                <span className="me-2">Follow Me: </span>
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
                                    Cover all topicc{' '}
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
                                    The course identify things we want to change
                                    and then figure out the things that need to
                                    be done to create the desired outcome. The
                                    course helped me in clearly define problems
                                    and generate a wider variety of quality
                                    solutions. Support more structures analysis
                                    of options leading to better decisions.
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
                                    Cover all topicc{' '}
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
                                    The course identify things we want to change
                                    and then figure out the things that need to
                                    be done to create the desired outcome. The
                                    course helped me in clearly define problems
                                    and generate a wider variety of quality
                                    solutions. Support more structures analysis
                                    of options leading to better decisions.
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
                    <span className="course-price-badge onsale">39% off</span>
                  </div>
                  <ul className="course-sidebar-list">
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          <i className="far fa-sliders-h" />
                          Level
                        </span>
                        Beginnner
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          <i className="fas fa-play-circle" />
                          Lectures
                        </span>
                        2
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          <i className="far fa-user" />
                          Students
                        </span>
                        20
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          <i className="far fa-clock" />
                          Duration
                        </span>
                        6 hours
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          <i className="far fa-globe" />
                          Language
                        </span>
                        English
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>
                          <i className="far fa-calendar" />
                          Updated{' '}
                        </span>
                        October 15, 2022
                      </div>
                    </li>
                  </ul>
                  <div className="buy-btn">
                    <button className="button button-enroll-course btn btn-main-2 rounded">
                      <i className="far fa-shopping-cart me-2" /> Enroll Course
                    </button>
                  </div>
                  <div className="course-meterial">
                    <h4 className="mb-3">Material Includes</h4>
                    <ul className="course-meterial-list">
                      <li>
                        <i className="fal fa-long-arrow-right" />
                        Videos
                      </li>
                      <li>
                        <i className="fal fa-long-arrow-right" />
                        Files For Development
                      </li>
                      <li>
                        <i className="fal fa-long-arrow-right" />
                        Documentation Files
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="course-latest">
                  <h4 className="mb-4">Popular Courses</h4>
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
                          <a href="#">Wordpress Theme Development</a>
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
                          <a href="#">mastering Photoshop for beginners</a>
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
                          <a href="#">Photography mastering adobe tool</a>
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
