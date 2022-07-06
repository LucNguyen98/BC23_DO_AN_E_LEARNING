import React, { useState } from 'react';
import {
  ABOUT_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  COURSE_PATH,
  COURSE_SEARCH_PATH,
  INSTRUCTORS_PATH,
} from 'src/constants/pathName';
import { NavLinkComponent } from '..';
import SubMenuMobile from '../SubMenu/SubMenuMobile';
import './Header.scss';
export default function HeaderMobile({
  courseGroupByCategory,
  tenKhoaHoc,
  renderCategories,
}) {
  const [expand, setExpand] = useState([false, false]);

  const openMenu = (e) => {
    document.querySelector('.site-navbar').classList.toggle('menu-on');
    e.preventDefault();
  };

  const closeMenu = (e) => {
    document.querySelector('.site-navbar').classList.remove('menu-on');
    e.preventDefault();
  };

  const expandMenu = (e, index) => {
    e.preventDefault();
    let newExpand = [...expand];
    newExpand[index] = !expand[index];
    setExpand(newExpand);
  };

  const iconExpand = (expand) => (
    <i className={`fa fa-angle-${expand ? 'up' : 'down'}`}></i>
  );

  return (
    <div className="header-navbar navbar-sticky mobile-menu">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="site-logo">
            <NavLinkComponent to={'/'}>
              <img src="/images/logo.png" alt="" className="img-fluid" />
            </NavLinkComponent>
          </div>
          <div className="offcanvas-icon d-block d-lg-none">
            <a href="#" className="nav-toggler" onClick={openMenu}>
              <i className="fa fa-bars" />
            </a>
          </div>
          {renderCategories()}
          <div className="header-search-bar d-none d-xl-block ms-4">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm khoá học"
              name="tenKhoaHoc"
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
                <NavLinkComponent to={COURSE_PATH}>Khoá học</NavLinkComponent>
                {expand[0] && <SubMenuMobile data={courseGroupByCategory} />}
                <span
                  className="menu-trigger"
                  onClick={(e) => expandMenu(e, 0)}
                >
                  {iconExpand(expand[0])}
                </span>
              </li>
              <li className="has-submenu">
                <NavLinkComponent to={ABOUT_PATH}>Giới thiệu</NavLinkComponent>
                {expand[1] && (
                  <ul>
                    <li>
                      <NavLinkComponent to={ABOUT_PATH}>
                        Về chúng tôi
                      </NavLinkComponent>
                    </li>
                    <li>
                      <NavLinkComponent to={CONTACT_PATH}>
                        Liên hệ
                      </NavLinkComponent>
                    </li>
                  </ul>
                )}
                <span
                  className="menu-trigger"
                  onClick={(e) => expandMenu(e, 1)}
                >
                  {iconExpand(expand[1])}
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
  );
}
