import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  getCategoriesAction,
  getCourseListAction,
} from 'src/redux/actions/courseAction';
import {
  categoriesSelector,
  courseGroupByCategorySelector,
} from 'src/redux/selectors/courseSelector';
import SubMenu from '../SubMenu/SubMenu';
import './Header.scss';
export default function Header() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const courseGroupByCategory = useSelector(courseGroupByCategorySelector);
  useEffect(() => {
    dispatch(getCategoriesAction());
    dispatch(getCourseListAction());
  }, [dispatch]);

  const renderCategories = () => {
    return (
      <div className="header-category-menu d-none d-xl-block">
        <ul>
          <li className="has-submenu">
            <a href="#">
              <i className="fa fa-th mr-2" />
              Danh mục
            </a>
            <ul className="submenu">
              {categories?.map((cate, index) => (
                <li key={index}>
                  <NavLink to={`/courses/${cate.maDanhMuc}`}>
                    {cate?.tenDanhMuc}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    );
  };

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
              {renderCategories()}
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
                    <NavLink to="/home">Trang chủ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses">Khoá học</NavLink>
                    <SubMenu data={courseGroupByCategory} />

                    <span className="menu-trigger">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </li>
                  <li>
                    <NavLink to="/about">Về chúng tôi</NavLink>
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
                        <NavLink to={'/blog-list'}>Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/blog'}>Blog Details</NavLink>
                      </li>
                    </ul>
                    <span className="menu-trigger">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </li>
                  <li>
                    <NavLink to={'/contact'}>Liên hệ</NavLink>
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
