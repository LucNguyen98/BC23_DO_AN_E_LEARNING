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
  USER_CREATE_EDIT_PATH,
  USER_MANAGER_PATH,
  COURSE_MANAGER_PATH,
  COURSE_CREATE_EDIT_PATH,
  // USER_CREATE_EDIT_PATH,
  // USER_MANAGER_PATH,
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

const UserManager = lazy(() =>
  import('src/pages/AdminPages/UserManager/UserManager')
);
const UserCreateOrEditForm = lazy(() =>
  import('src/pages/AdminPages/UserManager/UserCreateOrEditForm')
);

const CourseManager = lazy(() =>
  import('src/pages/AdminPages/CourseManager/CourseManager')
);
const CourseCreateOrEditForm = lazy(() =>
  import('src/pages/AdminPages/CourseManager/CourseCreateOrEditForm')
);

const Starter = lazy(() => import('src/pages/AdminPages/Starter.js'));

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
  {
    name: 'Dashboard',
    path: 'starter',
    icon: 'bi bi-speedometer2',
    Component: Starter,
    exact: true,
    isHidden: false,
  },
  {
    path: USER_MANAGER_PATH,
    exact: true,
    Component: UserManager,
    name: 'Người dùng',
    icon: 'bi bi-speedometer2',
    isHidden: false,
  },
  {
    path: USER_CREATE_EDIT_PATH,
    exact: true,
    Component: UserCreateOrEditForm,
    name: 'Tạo/Chỉnh sửa người dùng',
    icon: 'bi bi-speedometer2',
    isHidden: true,
  },
  {
    path: COURSE_MANAGER_PATH,
    exact: true,
    Component: CourseManager,
    name: 'Khóa Học',
    icon: 'bi bi-file-earmark-spreadsheet',
    isHidden: false,
  },
  {
    path: COURSE_CREATE_EDIT_PATH,
    exact: true,
    Component: CourseCreateOrEditForm,
    name: 'Tạo/Chỉnh sửa khóa học',
    icon: 'bi bi-file-earmark-spreadsheet',
    isHidden: true,
  },
];
