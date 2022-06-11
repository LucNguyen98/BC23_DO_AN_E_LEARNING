import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getCourseListAction } from 'src/redux/actions/todoAction';

export default function ExamplePage() {
  const dispatch = useDispatch();
  const fetchCourseList = () => {
    dispatch(getCourseListAction());
  };
  return (
    <div>
      <Button type="primary" onClick={fetchCourseList}>
        lấy danh sách khoá học
      </Button>
    </div>
  );
}
