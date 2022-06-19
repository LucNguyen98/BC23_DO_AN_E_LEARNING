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
    path: '/',
    exact: true,
    Component: Home,
  },
];
