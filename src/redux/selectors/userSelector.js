import { createSelector } from 'reselect';
import { mapDataInstructors } from 'src/helpers/parse';

export const instructorsSelector = createSelector(
  [(state) => state.user.users],
  mapDataInstructors
);

export const instructorsPopularSelector = createSelector(
  [instructorsSelector],
  (instructors) => {
    return instructors
      ?.sort((insA, insB) => insB.students - insA.students)
      .slice(0, 4);
  }
);
