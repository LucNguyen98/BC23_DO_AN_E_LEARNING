import React from 'react';
import './Header.scss';
export default function Header() {
  return (
    <div>
      <header className="header-style-1">
        <div className="header-topbar topbar-style-2">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-8 col-lg-6 col-md-12">
                <div className="header-contact text-center text-lg-start d-none d-sm-block">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <span className="text-color me-2">
                        <i className="fa fa-phone-alt" />
                      </span>
                      <a href="tel:+(354) 6800 37849"> +(354) 6800 37849</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-color me-2">
                        <i className="fa fa-envelope" />
                      </span>
                      <a href="malito:hello@edumel.com"> hello@edumel.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="d-sm-flex justify-content-center justify-content-lg-end">
                  <div className="header-socials text-center text-lg-end">
                    <ul className="list-inline">
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
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-pinterest" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-btn text-center text-lg-end">
                    <a href="#">
                      {' '}
                      <i className="fa fa-user-alt" /> Login/Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-navbar navbar-sticky">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="site-logo">
                <a href="index.html">
                  <img src="/images/logo.png" alt="" className="img-fluid" />
                </a>
              </div>
              <div className="offcanvas-icon d-block d-lg-none">
                <a href="#" className="nav-toggler">
                  <i className="fal fa-bars" />
                </a>
              </div>
              <div className="header-category-menu d-none d-xl-block">
                <ul>
                  <li className="has-submenu">
                    <a href="#">
                      <i className="fa fa-th me-2" />
                      Categories
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="#">Design</a>
                        <ul className="submenu">
                          <li>
                            <a href="#">Design Tools</a>
                          </li>
                          <li>
                            <a href="#">Photoshop mastering</a>
                          </li>
                          <li>
                            <a href="#">Adobe Xd Deisgn</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Developemnt</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                      <li>
                        <a href="#">Freelancing</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="header-search-bar d-none d-xl-block ms-4">
                <form action="#">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for Course"
                  />
                  <a href="#" className="search-submit">
                    <i className="fa fa-search"></i>
                  </a>
                </form>
              </div>
              <nav className="site-navbar ms-auto">
                <ul className="primary-menu">
                  <li className="current">
                    <a href="index.html">Home</a>

                    <ul className="submenu">
                      <li>
                        <a href="index.html">Home One</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Two</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home Three</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home Four</a>
                      </li>
                    </ul>
                    <span className="menu-trigger">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="courses.html">Courses</a>
                    <ul className="submenu">
                      <li>
                        <a href="courses.html">Courses</a>
                      </li>
                      <li>
                        <a href="courses-2.html">Course Grid 2 </a>
                      </li>
                      <li>
                        <a href="courses-3.html">Course Grid 3</a>
                      </li>
                      <li>
                        <a href="courses-4.html">Course Grid 4</a>
                      </li>
                      <li>
                        <a href="courses-5-list.html">Course List</a>
                      </li>
                      <li className="has-submenu">
                        <a href="#">Single Layout</a>
                        <ul className="submenu">
                          <li>
                            <a href="course-single.html">Course Single 1</a>
                          </li>
                          <li>
                            <a href="course-single-2.html">Course Single 2</a>
                          </li>
                          <li>
                            <a href="course-single-3.html">Course Single 3</a>
                          </li>
                          <li>
                            <a href="course-single-4.html">Course Single 4</a>
                          </li>
                          <li>
                            <a href="course-single-5.html">Course Single 5</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <span className="menu-trigger">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="submenu">
                      <li>
                        <a href="instructor.html">Instructors</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="Register.html">Register</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog-grid.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Details</a>
                      </li>
                    </ul>
                    <span className="menu-trigger">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                <a href="#" className="nav-close">
                  <i className="fal fa-times" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
