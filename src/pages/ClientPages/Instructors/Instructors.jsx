import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAction } from 'src/redux/actions/authAction';
import { instructorsSelector } from 'src/redux/selectors/authSelector';
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
            const studentCount = Math.floor(Math.random(1) * 500);
            const courseCount = Math.floor(Math.random(1) * 100);
            return (
              <InstructorItem
                key={index}
                item={instructor}
                studentCount={studentCount}
                courseCount={courseCount}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
