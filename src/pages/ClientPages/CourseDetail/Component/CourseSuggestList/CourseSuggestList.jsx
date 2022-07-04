import React from 'react';

import CourseItem from './CourseItem';

function CourseSuggestList({ data = [] }) {
  return (
    <div className="course-latest">
      <h4 className="mb-4">Những Khóa Học Tham Khảo</h4>
      <ul className="recent-posts course-popular">
        {data.map((course, index) => (
          <CourseItem key={index} item={course} />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(CourseSuggestList);
