import React from 'react';
import { Button, Nav, NavItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { adminRouter } from 'src/configs/router.config';
import { ADMIN_PARENT } from 'src/constants/pathName';

// const navigation = [
//   {
//     title: 'Dashboard',
//     href: '/admin/starter',
//     icon: 'bi bi-speedometer2',
//   },
//   {
//     title: 'Alert',
//     href: '/admin/alerts',
//     icon: 'bi bi-bell',
//   },
//   {
//     title: 'Badges',
//     href: '/admin/badges',
//     icon: 'bi bi-patch-check',
//   },
//   {
//     title: 'Buttons',
//     href: '/admin/buttons',
//     icon: 'bi bi-hdd-stack',
//   },
//   {
//     title: 'Cards',
//     href: '/admin/cards',
//     icon: 'bi bi-card-text',
//   },
//   {
//     title: 'Grid',
//     href: '/admin/grid',
//     icon: 'bi bi-columns',
//   },
//   {
//     title: 'Người dùng',
//     href: '/admin/table',
//     icon: 'bi bi-layout-split',
//   },
//   {
//     title: 'Forms',
//     href: '/admin/forms',
//     icon: 'bi bi-textarea-resize',
//   },
// ];

const navigation = adminRouter;

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById('sidebarArea').classList.toggle('showSidebar');
  };
  let location = useLocation();
  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) =>
            !navi.isHidden ? (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  onClick={() => showMobilemenu()}
                  to={`${ADMIN_PARENT}/${navi.path}`}
                  className={
                    location.pathname === `${ADMIN_PARENT}/${navi.path}`
                      ? 'active nav-link py-3'
                      : 'nav-link py-3'
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block'">{navi.name}</span>
                </Link>
              </NavItem>
            ) : null
          )}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
