import React from 'react';
import { NavLink } from 'react-router-dom';

function SubMenu({ data = [] }) {
  const renderSubMenuLevel2 = (menu) => {
    return menu?.danhSachKhoaHoc.map((subMenu) => (
      <li key={subMenu?.maKhoaHoc}>
        <NavLink to={`/course-detail/${subMenu?.maKhoaHoc}`}>
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
            <NavLink to={`/courses/${menu?.danhMucKhoaHoc?.maDanhMucKhoahoc}`}>
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
