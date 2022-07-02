import { createSelector } from 'reselect';
import { groupCourseByCategory, mapDataCourses } from 'src/helpers/parse';
export const categoriesSelector = (state) => state.course.categories;

export const coursesSelector = createSelector(
  [(state) => state.course.coursesByCategory],
  mapDataCourses
);

export const courseGroupByCategorySelector = createSelector(
  [groupCourseByCategory],
  (courses) => courses
);
