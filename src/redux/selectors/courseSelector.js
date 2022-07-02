import { createSelector } from 'reselect';
import { groupCourseByCategory, mapDataCourses } from 'src/helpers/parse';
export const categoriesSelector = (state) => state.course.categories;

export const coursesSelector = createSelector(
  [(state) => state.course.courseList],
  mapDataCourses
);

export const courseMenuSelector = createSelector(
  [groupCourseByCategory],
  (courses) => courses
);

export const coursesPopularSelector = createSelector(
  [(state) => mapDataCourses(state.course.courseMenu)],
  (courses) => {
    return courses
      ?.sort((coursesA, coursesB) => coursesB.luotXem - coursesA.luotXem)
      .slice(0, 3);
  }
);
