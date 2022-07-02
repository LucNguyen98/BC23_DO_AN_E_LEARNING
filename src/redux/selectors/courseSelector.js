import { createSelector } from 'reselect';
import { groupCourseByCategory, mapDataCourses } from 'src/helpers/parse';
export const categoriesSelector = (state) => state.course.categories;

export const coursesSelector = createSelector(
  [(state) => state.course.coursesByCategory],
  mapDataCourses
);

export const courseAllListSelector = createSelector(
  [(state) => state.course.courseList],
  mapDataCourses
);

export const courseGroupByCategorySelector = createSelector(
  [groupCourseByCategory],
  (courses) => courses
);

export const coursesPopularSelector = createSelector(
  [courseAllListSelector],
  (courses) => {
    return courses
      ?.sort((coursesA, coursesB) => coursesB.luotXem - coursesA.luotXem)
      .slice(0, 3);
  }
);
