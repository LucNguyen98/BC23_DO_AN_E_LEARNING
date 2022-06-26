import { createSelector } from 'reselect';
import { groupCourseByCategory } from 'src/helpers/parse';
export const categoriesSelector = (state) => state.course.categories;

export const courseGroupByCategorySelector = createSelector(
  [groupCourseByCategory],
  (courses) => courses
);
