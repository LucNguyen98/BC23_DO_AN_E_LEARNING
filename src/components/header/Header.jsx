import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ABOUT_PATH,
  ACCOUNT_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  COURSE_PATH,
  INSTRUCTORS_PATH,
  LOGIN_PATH,
} from 'src/constants/pathName';
import { getUser } from 'src/helpers/localStorage';
import {
  getCategoriesAction,
  getCourseListAction,
} from 'src/redux/actions/courseAction';
import { logOutHandle } from 'src/redux/reducers/authReducer';
import {
  // categoriesSelector,
  courseGroupByCategorySelector,
} from 'src/redux/selectors/courseSelector';
import { NavLinkComponent } from '..';
import SubMenu from '../SubMenu/SubMenu';
import './Header.scss';
export default function Header() {
  const dispatch = useDispatch();
  // const categories = useSelector(categoriesSelector);
  const courseGroupByCategory = useSelector(courseGroupByCategorySelector);
  const user = getUser();

  useEffect(() => {
    dispatch(getCategoriesAction());
    dispatch(getCourseListAction());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', () => breakpointCheck());
    return () => window.removeEventListener('resize', null);
  }, []);

  function breakpointCheck() {
    let windoWidth = window.innerWidth;
    if (windoWidth <= 991) {
      document.querySelector('.header-navbar').classList.add('mobile-menu');
    } else {
      document.querySelector('.header-navbar').classList.remove('mobile-menu');
    }
  }

  // const openMenu = (e) => {
  //   document.querySelector('.site-navbar').classList.toggle('menu-on');
  //   e.preventDefault();
  // };

  const closeMenu = (e) => {
    document.querySelector('.site-navbar').classList.remove('menu-on');
    e.preventDefault();
  };

  const logOut = () => {
    dispatch(logOutHandle());
    window.location.reload(false);
  };

  // const renderCategories = () => {
  //   return (
  //     <div className="header-category-menu d-none d-xl-block">
  //       <ul>
  //         <li className="has-submenu">
  //           <NavLinkComponent to={''}>
  //             <i className="fa fa-th mr-2" />
  //             Danh mục
  //           </NavLinkComponent>
  //           <ul className="submenu">
  //             {categories?.map((cate, index) => (
  //               <li key={index}>
  //                 <NavLinkComponent to={`${COURSE_PATH}/${cate.maDanhMuc}`}>
  //                   {cate?.tenDanhMuc}
  //                 </NavLinkComponent>
  //               </li>
  //             ))}
  //           </ul>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // };

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
                  <span className="text-white">{user?.hoTen}</span>
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
      <div className="header-navbar navbar-sticky">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="site-logo">
              <NavLinkComponent to={'/'}>
                <img src="/images/logo.png" alt="" className="img-fluid" />
              </NavLinkComponent>
            </div>
            {/* <div className="offcanvas-icon d-block d-lg-none">
              <button className="nav-toggler" onClick={openMenu}>
                <i className="fa fa-bars"></i>
              </button>
            </div>
            {renderCategories()} */}
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
            <nav className="site-navbar ml-auto">
              <ul className="primary-menu">
                <li className="current">
                  <NavLinkComponent to="">Trang chủ</NavLinkComponent>
                </li>
                <li>
                  <NavLinkComponent to={COURSE_PATH}>Khoá học</NavLinkComponent>
                  <SubMenu data={courseGroupByCategory} />

                  <span className="menu-trigger">
                    <i className="fa fa-angle-down"></i>
                  </span>
                </li>
                <li>
                  <NavLinkComponent to={ABOUT_PATH}>
                    Về chúng tôi
                  </NavLinkComponent>
                </li>
                <li>
                  <NavLinkComponent to={INSTRUCTORS_PATH}>
                    Giảng viên
                  </NavLinkComponent>
                </li>
                <li>
                  <NavLinkComponent to={BLOG_PATH}>Blog</NavLinkComponent>
                </li>
                <li>
                  <NavLinkComponent to={CONTACT_PATH}>Liên hệ</NavLinkComponent>
                </li>
              </ul>

              <button className="nav-close" onClick={closeMenu}>
                <i className="fa fa-times"></i>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
