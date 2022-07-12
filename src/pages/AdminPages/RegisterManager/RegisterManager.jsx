import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import RegisterControls from 'src/components/dashboard/RegisterControls';
import RegisterTable from 'src/components/dashboard/RegisterTable';
import { WARNING_COURSE_CANCEL } from 'src/constants/error';
import { courseCancelAction } from 'src/redux/actions/courseAction';
import { getStudentAction } from 'src/redux/actions/userAction';
import Swal from 'sweetalert2';

export default function RegisterManager() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { members } = useSelector((state) => state.user);
  const [maKhoaHoc, setMaKhoaHoc] = useState('');

  const onChangeKey = (tuKhoa) => {
    if (tuKhoa) {
      setMaKhoaHoc(tuKhoa);
      dispatch(getStudentAction({ maKhoaHoc: tuKhoa }));
    }
  };

  const cancelCourse = (user) => {
    Swal.fire(WARNING_COURSE_CANCEL).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          courseCancelAction(
            {
              taiKhoan: user.taiKhoan,
              maKhoaHoc,
            },
            () => {
              dispatch(getStudentAction({ maKhoaHoc }));
            }
          )
        );
      }
    });
  };

  return (
    <Row>
      <Col lg="12">
        <RegisterControls onChange={onChangeKey} />
        <RegisterTable
          title="Học viên khoá học"
          data={members}
          cancelRegister={cancelCourse}
        />
      </Col>
    </Row>
  );
}
