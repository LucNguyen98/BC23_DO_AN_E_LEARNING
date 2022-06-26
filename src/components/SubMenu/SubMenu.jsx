import React from 'react';
import { NavLink } from 'react-router-dom';
import { COURSE_DETAIL_PATH, COURSE_PATH } from 'src/constants/pathName';

function SubMenu({ data = [] }) {
  const renderSubMenuLevel2 = (menu) => {
    return menu?.danhSachKhoaHoc.map((subMenu) => (
      <li key={subMenu?.maKhoaHoc}>
        <NavLink to={`${COURSE_DETAIL_PATH}/${subMenu?.maKhoaHoc}`}>
          {subMenu?.tenKhoaHoc}
        </NavLink>
      </li>
    ));
  };

  return (
    <ul className="submenu">
      {data.map((menu, index) => {
        const hasSubMenu =
          Array.isArray(menu?.danhSachKhoaHoc) &&
          menu.danhSachKhoaHoc.length > 0;
        return (
          <li className={hasSubMenu ? 'has-submenu' : ''} key={index}>
            <NavLink
              to={`${COURSE_PATH}/${menu?.danhMucKhoaHoc?.maDanhMucKhoahoc}`}
            >
              {' '}
              {menu?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </NavLink>
            {hasSubMenu && (
              <ul className="submenu">{renderSubMenuLevel2(menu)}</ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(SubMenu);
