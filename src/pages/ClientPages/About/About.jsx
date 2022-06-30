import React from 'react';
import Slider from 'react-slick';
import { img_9 } from 'src/assets/images/banner';
import {
  testimonial_avatar_01,
  testimonial_avatar_02,
  testimonial_avatar_03,
  testimonial_avatar_04,
} from 'src/assets/images/clients';
import { team_1, team_2, team_3, team_4 } from 'src/assets/images/team';

export default function About() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* About Section Start */}
      <section className="about-3 section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="about-img">
                <img src={img_9} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-content mt-5 mt-lg-0">
                <div className="heading mb-50">
                  <span className="subheading">10 years Glory of success</span>
                  <h2 className="font-lg">
                    Some reasons why Start Your Online Learning with Us
                  </h2>
                </div>
                <div className="about-features">
                  <div className="feature-item feature-style-left">
                    <div className="feature-icon icon-bg-3 icon-radius">
                      <i className="fa fa-video" />
                    </div>
                    <div className="feature-text">
                      <h4>Online Classes</h4>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quidem veniam nulla inventore dolores fuga{' '}
                      </p>
                    </div>
                  </div>
                  <div className="feature-item feature-style-left">
                    <div className="feature-icon icon-bg-2 icon-radius">
                      <i className="far fa-file-certificate" />
                    </div>
                    <div className="feature-text">
                      <h4>Skilled Instructors</h4>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quidem veniam nulla inventore dolores fuga{' '}
                      </p>
                    </div>
                  </div>
                  <div className="feature-item feature-style-left">
                    <div className="feature-icon icon-bg-1 icon-radius">
                      <i className="fad fa-users" />
                    </div>
                    <div className="feature-text">
                      <h4>Get Certificate</h4>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quidem veniam nulla inventore dolores fuga{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section END */}
      {/* InstructorsSection Start */}
      <section className="instructors section-padding-btm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 pe-5">
              <div className="section-heading">
                <span className="subheading">Start Today</span>
                <h2 className="font-lg mb-20">Our Top Instructors</h2>
                <p className="mb-30">
                  Do you want to be an instructor? Do you want to share your
                  knowledge with everyone? If you have any skill then you can
                  easily share your knowledge online or offline through iLive
                  platform &amp; make money.
                </p>
                <ul className="list-item mb-40">
                  <li>
                    <i className="fa fa-check" />
                    <h5>
                      Develop your skills Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                    </h5>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <h5>
                      Share your knowledge Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                    </h5>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <h5>
                      Earn from globally Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </h5>
                  </li>
                </ul>
                <a href="#" className="btn btn-main rounded">
                  Start Teaching today
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="team-item team-item-2 mt-5">
                    <div className="team-img">
                      <img src={team_4} alt="" className="img-fluid" />
                      <ul className="team-socials list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h4>Harish Ham</h4>
                        <p>SEO Expert</p>
                      </div>
                      <div className="course-meta">
                        <span className="duration">
                          <i className="far fa-user-alt" />
                          20 Students
                        </span>
                        <span className="lessons">
                          <i className="far fa-play-circle me-2" />2 Course
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="team-item team-item-2">
                    <div className="team-img">
                      <img src={team_1} alt="" className="img-fluid" />
                      <ul className="team-socials list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h4>John doe</h4>
                        <p>CEO, Developer</p>
                      </div>
                      <div className="course-meta">
                        <span className="duration">
                          <i className="far fa-user-alt" />
                          20 Students
                        </span>
                        <span className="lessons">
                          <i className="far fa-play-circle me-2" />2 Course
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="team-item team-item-2">
                    <div className="team-img">
                      <img src={team_2} alt="" className="img-fluid" />
                      <ul className="team-socials list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h4>Mikel</h4>
                        <p>Web Developer</p>
                      </div>
                      <div className="course-meta">
                        <span className="duration">
                          <i className="far fa-user-alt" />
                          20 Students
                        </span>
                        <span className="lessons">
                          <i className="far fa-play-circle me-2" />2 Course
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="team-item team-item-2">
                    <div className="team-img">
                      <img src={team_3} alt="" className="img-fluid" />
                      <ul className="team-socials list-inline">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h4>Johansam</h4>
                        <p>Marketer</p>
                      </div>
                      <div className="course-meta">
                        <span className="duration">
                          <i className="far fa-user-alt" />
                          20 Students
                        </span>
                        <span className="lessons">
                          <i className="far fa-play-circle me-2" />2 Course
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Instructors Section End */}
      {/* Counter Section start */}
      <section className="counter-section4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 counter-inner">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="counter-item mb-5 mb-lg-0">
                    <div className="count">
                      <span className="counter h2">2000</span>
                      <span>+</span>
                    </div>
                    <p>Students</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-item mb-5 mb-lg-0">
                    <div className="count">
                      <span className="counter h2">1200</span>
                    </div>
                    <p>Online Courses</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-item mb-5 mb-lg-0">
                    <div className="count">
                      <span className="counter h2">2256</span>
                    </div>
                    <p>Finished Seasons</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="counter-item">
                    <div className="count">
                      <span className="counter h2">100</span>
                      <span>%</span>
                    </div>
                    <p>Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COunter Section End */}
      {/* Testimonial section start */}
      <section className="testimonial-4 section-padding bg-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-heading text-center mb-50">
                <h2 className="font-lg">Our Students Says</h2>
                <p>Discover Your Perfect Program In Our Courses.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-12">
              <Slider {...settings} className="testimonials-slides">
                <div className="testimonial-item">
                  <div className="testimonial-inner">
                    <div className="quote-icon">
                      <i className="flaticon-left-quote" />
                    </div>
                    <div className="testimonial-text mb-30">
                      Cras vel purus fringilla, lobortis libero ut Proin a velit
                      convallis, fermentum orci in, rutrum diam. Duis elementum
                      odio a pharetra commodo.
                    </div>
                    <div className="client-info d-flex align-items-center">
                      <div className="client-img">
                        <img
                          src={testimonial_avatar_01}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-author">
                        <h4>Cory Zamora</h4>
                        <span className="meta">Marketing Specialist</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-inner">
                    <div className="quote-icon">
                      <i className="flaticon-left-quote" />
                    </div>
                    <div className="testimonial-text  mb-30">
                      Cras vel purus fringilla, lobortis libero ut Proin a velit
                      convallis, fermentum orci in, rutrum diam. Duis elementum
                      odio a pharetra commodo.
                    </div>
                    <div className="client-info d-flex align-items-center">
                      <div className="client-img">
                        <img
                          src={testimonial_avatar_02}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-author">
                        <h4>Jackie Sanders</h4>
                        <span className="meta">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-inner">
                    <div className="quote-icon">
                      <i className="flaticon-left-quote" />
                    </div>
                    <div className="testimonial-text  mb-30">
                      Cras vel purus fringilla, lobortis libero ut Proin a velit
                      convallis, fermentum orci in, rutrum diam. Duis elementum
                      odio a pharetra commodo.
                    </div>
                    <div className="client-info d-flex align-items-center">
                      <div className="client-img">
                        <img
                          src={testimonial_avatar_03}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-author">
                        <h4>Nikolas Brooten</h4>
                        <span className="meta">Sales Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-inner">
                    <div className="quote-icon">
                      <i className="flaticon-left-quote" />
                    </div>
                    <div className="testimonial-text mb-30">
                      Cras vel purus fringilla, lobortis libero ut Proin a velit
                      convallis, fermentum orci in, rutrum diam. Duis elementum
                      odio a pharetra commodo.
                    </div>
                    <div className="client-info d-flex align-items-center">
                      <div className="client-img">
                        <img
                          src={testimonial_avatar_04}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-author">
                        <h4>Terry Ambady</h4>
                        <span className="meta">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-inner">
                    <div className="quote-icon">
                      <i className="flaticon-left-quote" />
                    </div>
                    <div className="testimonial-text mb-30">
                      Cras vel purus fringilla, lobortis libero ut Proin a velit
                      convallis, fermentum orci in, rutrum diam. Duis elementum
                      odio a pharetra commodo.
                    </div>
                    <div className="client-info d-flex align-items-center">
                      <div className="client-img">
                        <img
                          src={testimonial_avatar_03}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimonial-author">
                        <h4>Nikolas Brooten</h4>
                        <span className="meta">Sales Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial section End */}
      {/* Work Process Section Start */}
      <section className="work-process section-padding">
        <div className="container">
          <div className="row mb-70 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="section-heading mb-4 mb-xl-0">
                <span className="subheading">How to Start</span>
                <h2 className="font-lg">4 steps start your journey with us</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Nullam quis risus eget urna mollis.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-7 pe-xl-5 col-lg-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="step-item ">
                    <div className="step-number bg-1">01</div>
                    <div className="step-text">
                      <h5>Signup with all info</h5>
                      <p>
                        Lorem ipsum dolor seat ameat dui too consecteture elite
                        adipaising.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="step-item">
                    <div className="step-number bg-2">02</div>
                    <div className="step-text">
                      <h5>Take your Admission</h5>
                      <p>
                        Lorem ipsum dolor seat ameat dui too consecteture elite
                        adipaising.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="step-item ">
                    <div className="step-number bg-3">03</div>
                    <div className="step-text">
                      <h5>Learn from online </h5>
                      <p>
                        Lorem ipsum dolor seat ameat dui too consecteture elite
                        adipaising.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="step-item ">
                    <div className="step-number bg-1">04</div>
                    <div className="step-text">
                      <h5>Get certificate</h5>
                      <p>
                        Lorem ipsum dolor seat ameat dui too consecteture elite
                        adipaising.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              <div className="video-section mt-5 mt-xl-0">
                <div className="video-content">
                  <img
                    src="assets/images/bg/office01.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <a href="#" className="video-icon video-popup">
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Section End */}
    </div>
  );
}
