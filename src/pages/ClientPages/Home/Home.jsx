import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from 'src/redux/actions/userAction';
import { categoriesSelector } from 'src/redux/selectors/courseSelector';
import { instructorsPopularSelector } from 'src/redux/selectors/userSelector';
import '../../../assets/scss/css/responsive.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Cta from './components/Cta';
import Features from './components/Features';
import PopularCourses from './components/PopularCourses';
import Statistics from './components/Statistics';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import WorkProcess from './components/WorkProcess';
import './Home.scss';

export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const instructorsPopular = useSelector(instructorsPopularSelector);
  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <div id="top-header">
      <div>
        <Banner />
        <Statistics />
        <Categories categories={categories} />
        <WorkProcess />
        <PopularCourses customClass={['bg-gray']} />
        <Features />
        <Team teams={instructorsPopular} />
        <Testimonial />
        <Cta />
      </div>
    </div>
  );
}
