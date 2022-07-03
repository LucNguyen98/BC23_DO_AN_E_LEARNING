import { lazy } from 'react';

//
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
const Cart = lazy(() => import('src/pages/ClientPages/Cart/Cart'));
const Checkout = lazy(() => import('src/pages/ClientPages/Checkout/Checkout'));
const CourseRegister = lazy(() =>
  import('src/pages/ClientPages/Courses/CourseRegister')
);

const CoursesSearch = lazy(() =>
  import('src/pages/ClientPages/Courses/CoursesSearch')
);

import {
  ABOUT_PATH,
  ACCOUNT_PATH,
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

export const clientRouter = [
  {
    path: COURSE_PATH,
    exact: true,
    Component: Courses,
    name: 'Danh sách khoá học',
    isScrollToTop: true,
  },
  {
    path: `${COURSE_PATH}/:maDanhMucKhoahoc`,
    exact: true,
    Component: Courses,
    name: 'Danh sách khoá học',
    isScrollToTop: true,
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
  },
  {
    path: ABOUT_PATH,
    exact: true,
    Component: About,
    name: 'Về chúng tôi',
    isScrollToTop: true,
  },
  {
    path: BLOG_PATH,
    exact: true,
    Component: BlogList,
    name: 'Blog',
    isScrollToTop: true,
  },
  {
    path: '/blog',
    exact: true,
    Component: BlogDetail,
    name: 'Blog',
    isScrollToTop: true,
  },
  {
    path: INSTRUCTORS_PATH,
    exact: true,
    Component: Instructors,
    name: 'Giảng viên',
    isScrollToTop: true,
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
    path: '/cart',
    exact: true,
    Component: Cart,
  },
  {
    path: '/checkout',
    exact: true,
    Component: Checkout,
  },
  {
    path: ACCOUNT_PATH,
    exact: true,
    Component: Account,
    name: 'Tài khoản',
    requireLogin: false,
    isScrollToTop: true,
  },
  {
    path: COURSE_REGISTER,
    exact: true,
    Component: CourseRegister,
    isScrollToTop: true,
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
