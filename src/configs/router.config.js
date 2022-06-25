import About from 'src/pages/ClientPages/About/About';
import Contact from 'src/pages/ClientPages/Contact/Contact';
import BlogDetail from 'src/pages/ClientPages/Blog/BlogDetail';
import BlogList from 'src/pages/ClientPages/Blog/BlogList';
import CourseDetail from 'src/pages/ClientPages/CourseDetail/CourseDetail';
import Courses from 'src/pages/ClientPages/Courses/Courses';
import Home from 'src/pages/ClientPages/Home/Home';
import ExamplePage from 'src/pages/ExamplePage';
import Instructors from 'src/pages/ClientPages/Instructors/Instructors';
import Register from 'src/pages/ClientPages/Register/Register';
import Login from 'src/pages/ClientPages/Login/Login';
import Cart from 'src/pages/ClientPages/Cart/Cart';
import Checkout from 'src/pages/ClientPages/Checkout/Checkout';

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
    path: '/courses/:maDanhMucKhoahoc',
    exact: true,
    Component: Courses,
  },
  {
    path: '/course-detail/:maKhoaHoc',
    exact: true,
    Component: CourseDetail,
  },
  {
    path: '/contact',
    exact: true,
    Component: Contact,
  },
  {
    path: '/about',
    exact: true,
    Component: About,
  },
  {
    path: '/blog-list',
    exact: true,
    Component: BlogList,
  },
  {
    path: '/blog',
    exact: true,
    Component: BlogDetail,
  },
  {
    path: '/instructors',
    exact: true,
    Component: Instructors,
  },

  {
    path: '/register',
    exact: true,
    Component: Register,
  },
  {
    path: '/login',
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
    path: '/',
    exact: true,
    Component: Home,
  },
];
