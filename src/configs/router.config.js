import { lazy } from 'react';

//
const Home = lazy(() => import('src/pages/ClientPages/Home/Home'));
const Login = lazy(() => import('src/pages/ClientPages/Login/Login'));
const Register = lazy(() => import('src/pages/ClientPages/Register/Register'));
const Courses = lazy(() => import('src/pages/ClientPages/Courses/Courses'));
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

import {
  ABOUT_PATH,
  ACCOUNT_PATH,
  BLOG_PATH,
  CONTACT_PATH,
  COURSE_DETAIL_PATH,
  COURSE_PATH,
  INSTRUCTORS_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from 'src/constants/pathName';

export const clientRouter = [
  {
    path: COURSE_PATH,
    exact: true,
    Component: Courses,
  },
  {
    path: `${COURSE_PATH}/:maDanhMucKhoahoc`,
    exact: true,
    Component: Courses,
  },
  {
    path: `${COURSE_DETAIL_PATH}/:maKhoaHoc`,
    exact: true,
    Component: CourseDetail,
  },
  {
    path: CONTACT_PATH,
    exact: true,
    Component: Contact,
  },
  {
    path: ABOUT_PATH,
    exact: true,
    Component: About,
  },
  {
    path: BLOG_PATH,
    exact: true,
    Component: BlogList,
  },
  {
    path: '/blog',
    exact: true,
    Component: BlogDetail,
  },
  {
    path: INSTRUCTORS_PATH,
    exact: true,
    Component: Instructors,
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
  },
  {
    path: '/',
    exact: true,
    Component: Home,
  },
];
