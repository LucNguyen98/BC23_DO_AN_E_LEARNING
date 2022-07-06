import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ABOUT_PATH,
  ACCOUNT_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  COURSE_PATH,
  COURSE_SEARCH_PATH,
  INSTRUCTORS_PATH,
  LOGIN_PATH,
} from 'src/constants/pathName';
import { getUser } from 'src/helpers/localStorage';
import { getCourseMenuAction } from 'src/redux/actions/courseAction';
import { logOutHandle } from 'src/redux/reducers/authReducer';
import {
  categoriesSelector,
  courseMenuSelector,
} from 'src/redux/selectors/courseSelector';
import { NavLinkComponent } from '..';
import SubMenu from '../SubMenu/SubMenu';
import './Header.scss';
import HeaderMobile from './HeaderMenuMobile';
export default function Header() {
  const user = getUser();
  const dispatch = useDispatch();
  const courseGroupByCategory = useSelector(courseMenuSelector);
  const categories = useSelector(categoriesSelector);
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [tenKhoaHoc, setTenKhoaHoc] = useState('');

  useEffect(() => {
    dispatch(getCourseMenuAction());
  }, [dispatch]);

  useEffect(() => {
    window.onload = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.onresize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    return () => {
      window.removeEventListener('onload', null);
      window.removeEventListener('onresize', null);
    };
  }, []);

  const closeMenu = (e) => {
    document.querySelector('.site-navbar').classList.remove('menu-on');
    e.preventDefault();
  };

  const logOut = () => {
    dispatch(logOutHandle());
    window.location.reload(false);
  };

  const onHandleChange = (e) => {
    const { value } = e.target;
    setTenKhoaHoc(value);
  };

  const renderCategories = () => {
    return (
      <div className="header-category-menu d-none d-xl-block mr-2">
        <ul>
          <li className="has-submenu">
            <NavLinkComponent to={''} inActiveColor>
              <i className="fa fa-th mr-2" />
              Danh mục
            </NavLinkComponent>
            <ul className="submenu">
              {categories?.map((cate, index) => (
                <li key={index}>
                  <NavLinkComponent to={`${COURSE_PATH}/${cate.maDanhMuc}`}>
                    {cate?.tenDanhMuc}
                  </NavLinkComponent>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    );
  };

  const renderAccount = () => {
    return (
      <div className="header-btn text-center text-lg-end">
        {user ? (
          <div className="header-category-menu d-none d-xl-block">
            <ul>
              <li className="has-submenu">
                <NavLinkComponent
                  to={''}
                  className="d-flex justify-content-center align-items-center"
                >
                  <i className="fa fa-user-circle text-white"></i>
                  <span className="text-white text-truncate">
                    {user?.hoTen}
                  </span>
                  <i className="fa fa-angle-down ml-2 text-white"></i>
                </NavLinkComponent>
                <ul className="submenu">
                  <li>
                    <NavLinkComponent to={ACCOUNT_PATH} className="text-left">
                      <i className="fa fa-user"></i> Tài khoản
                    </NavLinkComponent>
                  </li>
                  <li>
                    <NavLinkComponent
                      to={''}
                      className="text-left"
                      onClick={logOut}
                      inActiveColor
                    >
                      <i className="fa fa-sign-out-alt"></i> Đăng xuất
                    </NavLinkComponent>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          <NavLinkComponent to={LOGIN_PATH}>
            <i className="fa fa-user-alt" />
            Đăng nhập/Đăng ký
          </NavLinkComponent>
        )}
      </div>
    );
  };

  return (
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
                {renderAccount()}
              </div>
            </div>
          </div>
        </div>
      </div>
      {screen.width <= 991 ? (
        <HeaderMobile
          courseGroupByCategory={courseGroupByCategory}
          tenKhoaHoc={tenKhoaHoc}
          renderCategories={renderCategories}
        />
      ) : (
        <div className="header-navbar navbar-sticky">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="site-logo">
                <NavLinkComponent to={'/'}>
                  <img src="/images/logo.png" alt="" className="img-fluid" />
                </NavLinkComponent>
              </div>
              {renderCategories()}
              <div className="header-search-bar d-none d-xl-block ms-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm khoá học"
                  name="tenKhoaHoc"
                  onChange={onHandleChange}
                />
                <NavLinkComponent
                  inActiveColor
                  to={{
                    pathname: `${COURSE_SEARCH_PATH}`,
                    search: `?tenKhoaHoc=${tenKhoaHoc}`,
                  }}
                  className="search-submit"
                >
                  <i className="fa fa-search"></i>
                </NavLinkComponent>
              </div>

              <nav className="site-navbar ml-auto">
                <ul className="primary-menu">
                  <li className="current">
                    <NavLinkComponent to="">Trang chủ</NavLinkComponent>
                  </li>
                  <li>
                    <NavLinkComponent to={COURSE_PATH}>
                      Khoá học
                    </NavLinkComponent>
                    <SubMenu data={courseGroupByCategory} />

                    <span className="menu-trigger">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </li>
                  <li className="has-submenu">
                    <NavLinkComponent to={ABOUT_PATH}>
                      Giới thiệu
                    </NavLinkComponent>
                    <ul className="submenu">
                      <li>
                        <NavLinkComponent to={ABOUT_PATH}>
                          Giới thiệu
                        </NavLinkComponent>
                      </li>
                      <li>
                        <NavLinkComponent to={CONTACT_PATH}>
                          Liên hệ
                        </NavLinkComponent>
                      </li>
                    </ul>
                    <span className="menu-trigger">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </li>
                  <li>
                    <NavLinkComponent to={INSTRUCTORS_PATH}>
                      Giảng viên
                    </NavLinkComponent>
                  </li>
                  <li>
                    <NavLinkComponent to={BLOG_PATH}>Blog</NavLinkComponent>
                  </li>
                </ul>

                <button className="nav-close" onClick={closeMenu}>
                  <i className="fa fa-times"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
