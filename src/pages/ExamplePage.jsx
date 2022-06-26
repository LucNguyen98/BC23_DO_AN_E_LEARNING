// import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'src/components';
import { getCourseListAction } from 'src/redux/actions/courseAction';

export default function ExamplePage() {
  const dispatch = useDispatch();
  const fetchCourseList = () => {
    dispatch(getCourseListAction());
  };
  return (
    <div>
      {/* <Button type="primary" onClick={fetchCourseList}>
        lấy danh sách khoá học
      </Button> */}

      <Button
        // disabled
        onClick={fetchCourseList}
        title="lấy danh sách khoá học"
        // btnType="grey"
      />
    </div>
  );
}
