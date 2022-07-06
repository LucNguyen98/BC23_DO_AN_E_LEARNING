import React from 'react';
import { Button, Nav, NavItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  {
    title: 'Dashboard',
    href: '/admin/starter',
    icon: 'bi bi-speedometer2',
  },
  {
    title: 'Alert',
    href: '/admin/alerts',
    icon: 'bi bi-bell',
  },
  {
    title: 'Badges',
    href: '/admin/badges',
    icon: 'bi bi-patch-check',
  },
  {
    title: 'Buttons',
    href: '/admin/buttons',
    icon: 'bi bi-hdd-stack',
  },
  {
    title: 'Cards',
    href: '/admin/cards',
    icon: 'bi bi-card-text',
  },
  {
    title: 'Grid',
    href: '/admin/grid',
    icon: 'bi bi-columns',
  },
  {
    title: 'Table',
    href: '/admin/table',
    icon: 'bi bi-layout-split',
  },
  {
    title: 'Forms',
    href: '/admin/forms',
    icon: 'bi bi-textarea-resize',
  },
  {
    title: 'Breadcrumbs',
    href: '/admin/breadcrumbs',
    icon: 'bi bi-link',
  },
  {
    title: 'About',
    href: '/admin/about',
    icon: 'bi bi-people',
  },
];

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
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? 'active nav-link py-3'
                    : 'nav-link py-3'
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block'">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;