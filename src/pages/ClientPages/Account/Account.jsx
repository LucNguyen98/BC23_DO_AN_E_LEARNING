import React, { useEffect } from 'react';

import { getUser } from 'src/helpers/localStorage';

import { useDispatch } from 'react-redux';
import { getProfileAction } from 'src/redux/actions/authAction';
import withLoader from 'src/HOC/withLoader';
import './Account.scss';
import Profile from './Components/Profile/Profile';
import MyCourse from './Components/MyCourse/MyCourse';
import Swal from 'sweetalert2';
import { WARNING_COURSE_CANCEL } from 'src/constants/error';
import { courseCancelAction } from 'src/redux/actions/courseAction';
import { getStudentAction } from 'src/redux/actions/userAction';
function Account() {
  const dispatch = useDispatch();
  const user = getUser();
  const { hoTen, email, chiTietKhoaHocGhiDanh } = user || {};

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  const cancelCourse = (maKhoaHoc) => {
    Swal.fire(WARNING_COURSE_CANCEL).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          courseCancelAction(
            {
              taiKhoan: user.taiKhoan,
              maKhoaHoc,
            },
            () => {
              window.location.reload();
            }
          )
        );
      }
    });
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              alt=""
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">{hoTen}</span>
            <span className="text-black-50">{email}</span>
            <ul
              className="nav nav-pills mb-3 flex-column mt-2"
              id="pills-tab"
              // role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="account-tab"
                  data-toggle="pill"
                  href="#profile"
                  role="tab"
                >
                  Tài khoản
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="account-tab"
                  data-toggle="pill"
                  href="#my-course"
                  role="tab"
                >
                  Khoá học của tôi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-9">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="profile"
              role="tabpanel"
            >
              <Profile user={user} />
            </div>
            <div
              className="tab-pane fade"
              id="my-course"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <MyCourse
                data={chiTietKhoaHocGhiDanh}
                cancelCourse={cancelCourse}
              />
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLoader(Account);
