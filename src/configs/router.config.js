import { lazy } from 'react';
import {
  ABOUT_PATH,
  ACCOUNT_PATH,
  ADMIN_PARENT,
  BLOG_PATH,
  CONTACT_PATH,
  COURSE_DETAIL_PATH,
  COURSE_PATH,
  COURSE_REGISTER,
  COURSE_SEARCH_PATH,
  INSTRUCTORS_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from 'src/constants/pathName';

const Home = lazy(() => import('src/pages/ClientPages/Home/Home'));
const Login = lazy(() => import('src/pages/ClientPages/Login/Login'));
const Register = lazy(() => import('src/pages/ClientPages/Register/Register'));
const Courses = lazy(() =>
  import('src/pages/ClientPages/Courses/CoursesNew.jsx')
);
const CourseDetail = lazy(() =>
  import('src/pages/ClientPages/CourseDetail/CourseDetail')
);
const About = lazy(() => import('src/pages/ClientPages/About/About'));
const Contact = lazy(() => import('src/pages/ClientPages/Contact/Contact'));
const BlogList = lazy(() => import('src/pages/ClientPages/Blog/BlogList'));
const BlogDetail = lazy(() => import('src/pages/ClientPages/Blog/BlogDetail'));
const Instructors = lazy(() =>
  import('src/pages/ClientPages/Instructors/Instructors')
);
const Account = lazy(() => import('src/pages/ClientPages/Account/Account'));
const CourseRegister = lazy(() =>
  import('src/pages/ClientPages/Courses/CourseRegister')
);

const CoursesSearch = lazy(() =>
  import('src/pages/ClientPages/Courses/CoursesSearch')
);

//

const Starter = lazy(() => import('src/pages/AdminPages/Starter.js'));
const Alerts = lazy(() => import('src/pages/AdminPages/ui/Alerts'));
const Badges = lazy(() => import('src/pages/AdminPages/ui/Badges'));
const Buttons = lazy(() => import('src/pages/AdminPages/ui/Buttons'));
const Cards = lazy(() => import('src/pages/AdminPages/ui/Cards'));
const Grid = lazy(() => import('src/pages/AdminPages/ui/Grid'));
const UserManager = lazy(() =>
  import('src/pages/AdminPages/UserManager/UserManager')
);
const Forms = lazy(() => import('src/pages/AdminPages/ui/Forms'));
const Breadcrumbs = lazy(() => import('src/pages/AdminPages/ui/Breadcrumbs'));

/****Layouts*****/
const FullLayout = lazy(() => import('../layouts/FullLayout'));

export const clientRouter = [
  {
    path: COURSE_PATH,
    exact: true,
    Component: Courses,
    name: 'Danh sách khoá học',
    isScrollToTop: true,
    isBreadcrumb: true,
  },
  {
    path: `${COURSE_PATH}/:maDanhMucKhoahoc`,
    exact: true,
    Component: Courses,
    name: 'Danh sách khoá học',
    isScrollToTop: true,
    isBreadcrumb: true,
  },
  {
    path: `${COURSE_DETAIL_PATH}/:maKhoaHoc`,
    exact: true,
    Component: CourseDetail,
    name: 'Thông tin khoá học',
    isScrollToTop: true,
  },
  {
    path: CONTACT_PATH,
    exact: true,
    Component: Contact,
    name: 'Liên hệ',
    isScrollToTop: true,
    isBreadcrumb: true,
  },
  {
    path: ABOUT_PATH,
    exact: true,
    Component: About,
    name: 'Về chúng tôi',
    isScrollToTop: true,
    isBreadcrumb: true,
  },
  {
    path: BLOG_PATH,
    exact: true,
    Component: BlogList,
    name: 'Blog',
    isScrollToTop: true,
    isBreadcrumb: true,
  },
  {
    path: '/blog',
    exact: true,
    Component: BlogDetail,
    name: 'Blog',
    isScrollToTop: true,
    isBreadcrumb: true,
  },
  {
    path: INSTRUCTORS_PATH,
    exact: true,
    Component: Instructors,
    name: 'Giảng viên',
    isScrollToTop: true,
    isBreadcrumb: true,
  },

  {
    path: REGISTER_PATH,
    exact: true,
    Component: Register,
  },
  {
    path: LOGIN_PATH,
    exact: true,
    Component: Login,
  },
  {
    path: ACCOUNT_PATH,
    exact: true,
    Component: Account,
    name: 'Tài khoản',
    isScrollToTop: true,
    isBreadcrumb: true,
  },
  {
    path: `${COURSE_REGISTER}/:maKhoaHoc`,
    exact: true,
    Component: CourseRegister,
    isScrollToTop: true,
    requireLogin: true,
  },
  {
    path: `${COURSE_SEARCH_PATH}`,
    exact: false,
    Component: CoursesSearch,
    name: 'Tìm kiếm',
    isScrollToTop: true,
  },
  {
    path: '/',
    exact: true,
    Component: Home,
    isScrollToTop: true,
  },
];

export const adminParentRouter = {
  path: ADMIN_PARENT,
  exact: true,
  Component: FullLayout,
  name: 'Admin Page',
  isScrollToTop: true,
  isBreadcrumb: true,
};

export const adminRouter = [
  { path: 'starter', exact: true, Component: Starter },
  { path: 'about', exact: true, Component: About },
  { path: 'alerts', exact: true, Component: Alerts },
  { path: 'badges', exact: true, Component: Badges },
  { path: 'buttons', exact: true, Component: Buttons },
  { path: 'cards', exact: true, Component: Cards },
  { path: 'grid', exact: true, Component: Grid },
  { path: 'table', exact: true, Component: UserManager },
  { path: 'forms', exact: true, Component: Forms },
  { path: 'breadcrumbs', exact: true, Component: Breadcrumbs },
];
