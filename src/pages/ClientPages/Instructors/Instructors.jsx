import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from 'src/redux/actions/userAction';
import { instructorsSelector } from 'src/redux/selectors/userSelector';
import InstructorItem from './InstructorItem';

export default function Instructors() {
  const dispatch = useDispatch();
  const instructors = useSelector(instructorsSelector);

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <section className="section-instructors section-padding">
      <div className="container">
        <div className="row">
          {instructors?.map((instructor, index) => {
            return <InstructorItem key={index} item={instructor} />;
          })}
        </div>
      </div>
    </section>
  );
}
