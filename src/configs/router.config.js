import CourseDetail from 'src/pages/ClientPages/CourseDetail/CourseDetail';
import Courses from 'src/pages/ClientPages/Courses/Courses';
import Home from 'src/pages/ClientPages/Home/Home';
import ExamplePage from 'src/pages/ExamplePage';

export const clientRouter = [
  {
    path: '/exam',
    exact: true,
    Component: ExamplePage,
  },
  {
    path: '/home',
    exact: true,
    Component: Home,
  },
  {
    path: '/courses',
    exact: true,
    Component: Courses,
  },
  {
    path: '/course-detail',
    exact: true,
    Component: CourseDetail,
  },
  {
    path: '/',
    exact: true,
    Component: Home,
  },
];
