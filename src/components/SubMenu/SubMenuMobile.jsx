import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { COURSE_DETAIL_PATH, COURSE_PATH } from 'src/constants/pathName';

function SubMenuMobile({ data = [] }) {
  const SubMenuLevel2 = ({ menu }) => {
    const [expand, setExpand] = useState(false);
    const expandMenu = (e) => {
      e.preventDefault();
      setExpand(!expand);
    };
    return (
      <div>
        {expand && (
          <ul>
            {menu?.danhSachKhoaHoc.map((subMenu) => (
              <li key={subMenu?.maKhoaHoc}>
                <NavLink to={`${COURSE_DETAIL_PATH}/${subMenu?.maKhoaHoc}`}>
                  {subMenu?.tenKhoaHoc}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
        <span className="menu-trigger" onClick={expandMenu}>
          <i className={`fa fa-angle-${expand ? 'up' : 'down'}`}></i>
        </span>
      </div>
    );
  };

  return (
    <ul>
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
            {hasSubMenu && <SubMenuLevel2 menu={menu} />}
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(SubMenuMobile);
