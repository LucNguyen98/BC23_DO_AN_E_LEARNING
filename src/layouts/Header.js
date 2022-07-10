import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from 'reactstrap';
import { ACCOUNT_ADMIN_PATH, ADMIN_PARENT } from 'src/constants/pathName';
import { logOutHandle } from 'src/redux/reducers/authReducer';
import user1 from '../assets/images/users/user4.jpg';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const showMobilemenu = () => {
    document.getElementById('sidebarArea').classList.toggle('showSidebar');
  };

  const logOut = () => {
    dispatch(logOutHandle());
    window.location.reload();
  };

  return (
    <Navbar color="white" light expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <img src="/images/logo.png" alt="" className="img-fluid" />
        </div>
        <NavbarBrand href={ADMIN_PARENT} className="site-logo">
          <img
            src="/images/logo-white.png"
            alt=""
            className="img-fluid d-lg-none"
          />
        </NavbarBrand>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => navigate(ACCOUNT_ADMIN_PATH)}>
              Tài khoản
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={logOut}>Đăng xuất</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
